import Header from "../../../components/Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../../components/Buttons/Button";
import { IoIosSave } from "react-icons/io";
import PhotoComponent from "../../../components/Photo/Photo";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  actualizarStatus,
  dataProduct,
} from "../../../store/slices/product/product_reducers";

const ViewEditProduct = ({ productosState }) => {
  const methods = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { productos } = productosState;

  useEffect(() => {
    if (productos) {
      const editProducto = productos.find((p) => {
        if (p.idProducto === id) return p;
      });
      if (editProducto) {
        methods.setValue("urlImage", editProducto.urlImage);
        methods.setValue("nombre", editProducto.nombre);
        methods.setValue("cantidad", editProducto.cantidad);
        methods.setValue("stockMinimo", editProducto.stockMinimo);
        methods.setValue("costo", editProducto.costo);
        methods.setValue("precioMenudeo", editProducto.precioMenudeo);
        methods.setValue("precioMayoreo", editProducto.precioMayoreo);
      }
    }
  }, [productos, id, methods]);

  const onSubmit = (data) => {
    const dataSend = {
      ...data,
      idProducto: product.idProducto,
      codigo: product.codigo,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      url: `${import.meta.env.VITE_URL}/producto/editar-producto?id=${id}`,
      data: dataSend,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data === "Datos del producto guardados exitosamente") {
          navigate("/products");
        } else {
          toast.error("Error al editar el producto");
        }
      })
      .catch(() => {
        toast.error("Error al editar el producto");
      });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-start items-center gap-2 w-full p-5">
          <IoArrowBackOutline size={32} onClick={() => navigate(-1)} />
          <p className="font-bold text-[18px]">Editar Producto</p>
        </div>

        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-evenly items-center gap-5 lg:flex-row lg:items-start lg:justify-center"
        >
          <FormProvider {...methods}>
            <div className="my-5 lg:w-[300px]">
              <PhotoComponent
                Error={methods?.formState.errors?.urlImage?.message}
                isError={!!methods?.formState.errors?.urlImage?.message}
                directory={"productos"}
                name="urlImage"
                register={methods.register}
              />
            </div>

            <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 px-5">
              <TextField
                label="Nombre del producto"
                name="nombre"
                type="text"
                placeholder="Nombre del producto"
                register={methods.register}
                Error={methods?.formState.errors?.nombre?.message}
                isError={!!methods?.formState.errors?.nombre?.message}
              />

              <TextField
                label="Cantidad del producto"
                name="cantidad"
                type="text"
                placeholder="Cantidad del producto"
                register={methods.register}
                Error={methods?.formState.errors?.cantidad?.message}
                isError={!!methods?.formState.errors?.cantidad?.message}
              />

              <TextField
                label="¿Cuál sería el Stock mínimo?"
                name="stockMinimo"
                type="text"
                placeholder="1, 4, 4.5kg, etc."
                register={methods.register}
                Error={methods?.formState.errors?.stock_minimo?.message}
                isError={!!methods?.formState.errors?.stock_minimo?.message}
              />

              <TextField
                label="Costo del producto"
                name="costo"
                type="text"
                placeholder="Costo del producto"
                register={methods.register}
                Error={methods?.formState.errors?.costo?.message}
                isError={!!methods?.formState.errors?.costo?.message}
              />

              <TextField
                label="Precio menudeo del producto"
                name="precioMenudeo"
                type="text"
                placeholder="Precio del producto"
                register={methods.register}
                Error={methods?.formState.errors?.precio_menudeo?.message}
                isError={!!methods?.formState.errors?.precio_menudeo?.message}
              />

              <TextField
                label="Precio mayoreo del producto"
                name="precioMayoreo"
                type="text"
                placeholder="Precio mayoreo del producto"
                register={methods.register}
                Error={methods?.formState.errors?.precio_mayoreo?.message}
                isError={!!methods?.formState.errors?.precio_mayoreo?.message}
              />

              <div className="w-[200px] lg:w-[300px] lg:h-[50px] my-5">
                <Button
                  texto="Guardar"
                  background="bg-blue"
                  onClick={() => {}}
                  type="submit"
                  isIcon={true}
                  Icon={<IoIosSave size={32} color="white" />}
                />
              </div>
            </div>
          </FormProvider>
        </form>
      </div>
    </div>
  );
};

ViewEditProduct.propTypes = {
  setDataProducts: PropTypes.func.isRequired,
  productosState: PropTypes.any,
  setStatus: PropTypes.any,
};

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewEditProduct);
