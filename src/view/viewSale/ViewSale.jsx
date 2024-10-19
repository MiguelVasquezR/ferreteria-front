import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaBarcode } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Button from "../../components/Buttons/Button";
import PropTypes from "prop-types";
import {
  actualizarStatus,
  dataProduct,
} from "../../store/slices/product/product_reducers";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
import BarcodeScannerComponent from "../../components/BarCode/BarCode";

import toast from "react-hot-toast";

const ViewSales = ({ productosState, setDataProducts, setStatus }) => {
  const methods = useForm();
  const { productos } = productosState;
  const cookie = new Cookies();
  const [sales, setSales] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0);

  useEffect(() => {
    if (productos.length !== 0 || productos === null) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "GET",
      url: `${import.meta.env.VITE_URL}/producto/obtener-productos`,
    };

    setStatus("loading");
    axios
      .request(config)
      .then((response) => {
        setDataProducts(response.data);
        setStatus("succeeded");
      })
      .catch(() => {
        toast.error("Error al obtener los productos");
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    const total = sales.reduce((acc, s) => {
      const precioUnitario =
        s.cantidadCompra >= s.stockMinimo ? s.precioMayoreo : s.precioMenudeo;
      return acc + s.cantidadCompra * precioUnitario;
    }, 0);
    setTotalCompra(total);
  }, [sales]);

  const handleFindProduct = (data) => {
    const pd = productos.find((p) => p.codigo === data.buscador);
    if (pd) {
      const existingSale = sales.find((s) => s.codigo === pd.codigo);
      if (existingSale) {
        setSales((prevSales) =>
          prevSales.map((s) =>
            s.codigo === existingSale.codigo
              ? { ...s, cantidadCompra: s.cantidadCompra + 1 }
              : s
          )
        );
      } else {
        setSales((prevSales) => [...prevSales, { ...pd, cantidadCompra: 1 }]);
      }
    }
  };

  const onSaveSale = () => {
    if (sales.length === 0) {
      toast.error("No hay productos para vender");
      return;
    }

    const data = {
      productos: sales,
      total: totalCompra,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      url: `${import.meta.env.VITE_URL}/venta/guardar`,
      data,
    };

    axios
      .request(config)
      .then((res) => {
        if (res.data === "Venta guardada exitosamente") {
          toast.success("Venta guardada exitosamente");
          setSales([]);
          setTotalCompra(0);
        } else {
          toast.error("Error al registrar la venta");
        }
      })
      .catch(() => {
        toast.error("Error al registrar la venta");
      });
  };

  return (
    <>
      <Header />
      <BarcodeScannerComponent />

      <div className="relative p-5 w-full h-full">
        <h2 className="font-bold text-[18px] lg:text-[22px] w-full">Ventas</h2>

        <div className="flex justify-center items-center flex-col gap-5 max-w-[1200px] mx-auto">
          <form
            onSubmit={methods.handleSubmit(handleFindProduct)}
            className="w-[320px] lg:w-[600px]"
          >
            <FormProvider {...methods}>
              <TextField
                placeholder="Buscar producto"
                isError={!!methods.formState.errors.search}
                Error={methods.formState.errors.search?.message}
                register={methods.register}
                name="buscador"
                type="text"
                isIcon={true}
                Icon={<IoIosSearch size={32} color="black" />}
              />
            </FormProvider>
          </form>

          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-start">
              <MdModeEdit className="cursor-pointer" size={32} color="gray" />
              <MdDelete className="cursor-pointer" size={32} color="gray" />
            </div>

            <div className="bg-black rounded-md text-black flex flex-row justify-center items-center p-1 gap-1 cursor-pointer">
              <FaBarcode
                size={32}
                color="white"
                onClick={() => setSales(true)}
              />
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-start gap-5">
            <table className="w-full">
              <thead>
                <tr className="table-row">
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Nombre
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Cantidad
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Precio Unidad
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {sales?.map((s, index) => {
                  const precioUnitario =
                    s.cantidadCompra >= s.stockMinimo
                      ? s.precioMayoreo
                      : s.precioMenudeo;
                  const total = s.cantidadCompra * precioUnitario;
                  return (
                    <tr key={s.codigo + "-" + index}>
                      <td className="text-center">{s.nombre}</td>
                      <td className="text-center">{s.cantidadCompra}</td>
                      <td className="text-center">{s.precioMenudeo}</td>
                      <td className="text-center">{total}</td>
                    </tr>
                  );
                })}
              </tbody>

              <tbody>
                <tr>
                  <td
                    className="border-solid border-[#d2d2d2] border-[1px] text-right"
                    colSpan="3"
                  >
                    Total a pagar
                  </td>
                  <td className="border-solid border-[#d2d2d2] border-[1px] text-center">
                    {totalCompra}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="w-[200px] h-[40px] lg:w-[300px] lg:h-[50px]">
              <Button
                background="bg-blue"
                isIcon={false}
                texto="Pagar"
                type=""
                Icon={false}
                onClick={onSaveSale}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewSales.propTypes = {
  productosState: PropTypes.object,
  setDataProducts: PropTypes.func,
  setStatus: PropTypes.func,
};

const mapsStateToProps = (state) => {
  return {
    productosState: state.productos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataProducts: (data) => dispatch(dataProduct(data)),
    setStatus: (status) => dispatch(actualizarStatus(status)),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(ViewSales);
