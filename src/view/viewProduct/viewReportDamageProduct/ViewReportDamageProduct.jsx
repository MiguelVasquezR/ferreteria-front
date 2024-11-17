import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import Header from "../../../components/Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import TextArea from "../../../components/Form/TextArea/TextArea";
import PhotoComponent from "../../../components/Photo/Photo";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../../components/Buttons/Button";
import { IoIosSave } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { SchemaReportDamage } from "../../../schema/SchemaReportDamage";
import { Cookies } from "react-cookie";
import { useState } from "react";

const ViewReportDamageProduct = () => {
  const methods = useForm({
    resolver: zodResolver(SchemaReportDamage),
    mode: "onChange",
  });
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    const config = {
      method: "POST",
      url: `${import.meta.env.VITE_URL}/reporte/guardar`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.get("token")}`,
      },
      data,
    };

    setIsLoading(true);
    axios
      .request(config)
      .then((response) => {
        if (response.data === "Reporte guardado exitosamente") {
          toast.success("Reporte guardado exitosamente");
          navigate("/");
        }
      })
      .catch(() => {
        setIsLoading(false);
        toast.error(
          "Por el momento no se puede guardar el reporte, intenta más tarde"
        );
      });
  };

  const backPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <div>
      <Header />

      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-start items-center gap-1 my-5 lg:pl-5 cursor-pointer">
          
          <h2 className="font-bold text-[18px] lg:text-[22px]">
            Reporte producto dañado
          </h2>
        </div>

        <form
          onSubmit={methods.handleSubmit(onSubmit)} // Usamos la función onSubmit aquí
          className="flex flex-col justify-evenly items-center gap-5 lg:flex-row lg:items-start lg:justify-center"
        >
          <FormProvider {...methods}>
            <div className="my-5 lg:w-[300px]">
              <PhotoComponent
                Error={methods?.formState?.errors?.urlImage?.message || ""}
                isError={!!methods?.formState?.errors?.urlImage?.message}
                directory={"productos"}
                register={methods.register}
                name={"urlImage"}
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 px-5">
              <TextField
                label="Seleccione el producto"
                name="nombre"
                type="text"
                placeholder="Nombre del producto dañado"
                register={methods.register}
                Error={methods.formState.errors.nombre?.message}
                isError={!!methods.formState.errors.nombre}
              />

              <TextArea
                label={"Seleccione el producto"}
                name="descripcion"
                placeholder="Describa el daño del producto"
                register={methods.register}
                error={methods.formState.errors.descripcion?.message}
                isError={!!methods.formState.errors.nombre}
              />

              <div className=" w-[200px] lg:w-[300px] lg:h-[50px] my-5 rounded-md">
                <Button
                  texto="Generar"
                  background="bg-F58A27"
                  onClick={() => {}}
                  type="submit"
                  isIcon={false}
                  isLoading={isLoading}
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

export default ViewReportDamageProduct;
