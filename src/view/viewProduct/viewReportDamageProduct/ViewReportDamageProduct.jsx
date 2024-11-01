import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { SchemaProduct } from "../../../schema/SchemaProduct";
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

const ViewReportDamageProduct = () => {
  const methods = useForm({
    resolver: zodResolver(SchemaProduct),
    mode: "onChange",
  });
  const navigate = useNavigate();

  // Definición de la función onSubmit
  const onSubmit = async (data) => {
    try {
      // Aquí puedes realizar una llamada a la API para enviar los datos
      const response = await axios.post("/api/report-damage", data);
      toast.success("Reporte enviado correctamente");
      navigate(-1); // Regresar a la página anterior después del envío exitoso
    } catch (error) {
      toast.error("Error al enviar el reporte");
    }
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
          <IoArrowBackOutline
            className="font-bold"
            size={32}
            color={"black"}
            onClick={backPage}
          />
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
                name="productoDagnado"
                type="text"
                placeholder="Nombre del producto dañado"
                register={methods.register}
                Error={methods.formState.errors.productoDagnado?.message}
                isError={!!methods.formState.errors.productoDagnado}
              />

              <TextArea
                isError=""
                name="reporteDagno"
                error={methods.formState.errors.reporteDagno?.message}
                label={"Seleccione el producto"}
                placeholder="Describa el daño del producto"
                register={methods.register}
              />

              <div className="bg-F58A27 w-[200px] lg:w-[300px] lg:h-[50px] my-5 rounded-md">
                <Button
                  texto="Generar"
                  background=""
                  onClick={() => {}}
                  type="submit"
                  isIcon={false}
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
