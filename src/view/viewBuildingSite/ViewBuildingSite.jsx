import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { FaPlusSquare } from "react-icons/fa";
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
import toast from "react-hot-toast";

const ViewBuildingSite = ({ productosState, setDataProducts, setStatus }) => {
  const methods = useForm();
  const { productos } = productosState;
  const cookie = new Cookies();
  const [totalCompra, setTotalCompra] = useState(1200);

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

  const handleFindProduct = (data) => {
    // Lógica de búsqueda de productos
  };

  const onSaveSale = () => {
    // Lógica para guardar la venta
  };

  return (
    <>
      <Header />

      <div className="relative p-5 w-full h-full">
        <div className="flex flex-row justify-start items-center gap-2 w-full p-5">
          <p className="font-bold text-[18px]">Obras</p>
        </div>
      
        <div className="flex justify-center items-center flex-col gap-5 max-w-[1200px] mx-auto">
          <form
            onSubmit={methods.handleSubmit(handleFindProduct)}
            className="w-[320px] lg:w-[600px]"
          >
            <FormProvider {...methods}>
              <TextField
                placeholder="Buscar obra"
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

          {/* Botón de agregar */}
    <div className="w-full flex justify-end mb-4 lg:w-[600px]">
      <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md">
        <FaPlusSquare size={35} color="orange" />
        Agregar
      </button>
    </div>
          <div className="w-full lg:w-[600px] p-5 bg-white shadow-lg rounded-md mt-5">
            <h1 className="text-[18px] lg:text-[20px] font-bold mb-3">Proyecto</h1>

            {/* Inicio de la partición en dos columnas */}
            <div className="grid grid-cols-2 gap-5">
              {/* Columna izquierda */}
              <div>
                <h2 className="text-[14px] font-bold">Encargado</h2>
                <div className="mb-2">
                  <p className="text-[14px] text-gray-600">Nombre:</p>
                  <p className="text-[14px] text-gray-600">Teléfono:</p>
                  <p className="text-[14px] text-gray-600">Correo:</p>
                  <p className="text-[14px] text-gray-600">RFC:</p>
                </div>
              </div>

              {/* Columna derecha */}
              <div>
                <div className="mb-2">
                  <p className="text-[14px] font-bold">Dirección Encargado</p>
                  <p className="text-[14px] text-gray-600">[Información]</p>
                </div>
                <div className="mb-2">
                  <p className="text-[14px] font-bold">Dirección Proyecto</p>
                  <p className="text-[14px] text-gray-600">[Información]</p>
                </div>
              </div>
            </div>

            {/* Fin de la partición en dos columnas */}

            {/* Íconos de edición y eliminación */}
            <div className="flex justify-end mt-5">
              <FaTrash size={24} color="orange" className="mr-4 cursor-pointer"/>
              <BiSolidPencil size={30} color="orange" className="cursor-pointer"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewBuildingSite.propTypes = {
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

export default connect(mapsStateToProps, mapDispatchToProps)(ViewBuildingSite);
