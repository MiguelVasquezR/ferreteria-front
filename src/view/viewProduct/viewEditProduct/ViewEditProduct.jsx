import Header from "../../../components/Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../../components/Buttons/Button";
import { IoIosSave } from "react-icons/io";
import PhotoComponent from "../../../components/Photo/Photo";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ViewEditProduct = () => {
  const methods = useForm();
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      url: `${import.meta.env.VITE_URL}/producto/obtener-producto?id=${id}`,
    };

    axios
      .request(config)
      .then((response) => {
        setProduct(response.data);
        methods.setValue("nombre", response.data.nombre);
        methods.setValue("cantidad", response.data.cantidad);
        methods.setValue("stockMinimo", response.data.stockMinimo);
        methods.setValue("costo", response.data.costo);
        methods.setValue("precioMenudeo", response.data.precioMenudeo);
        methods.setValue("precioMayoreo", response.data.precioMayoreo);
        methods.setValue("urlImage", response.data.urlImage);
      })
      .catch(() => {
        toast.error("Error al obtener el producto");
      });
  }, []);

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
        if(response.data === "Datos del producto guardados exitosamente"){
          navigate("/products")
        }else{
          toast.error("Error al editar el producto");
        }
      })
      .catch(() => {
        toast.error("Error al editar el producto");
      });
  };

  return (
    <div className="">
      <Header />
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-start items-center gap-2 w-full p-5">
          <IoArrowBackOutline size={32} />
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
export default ViewEditProduct;
