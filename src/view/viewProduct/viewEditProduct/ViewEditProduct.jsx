import Header from "../../../components/Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Photo from "../../../components/Photo/Photo";
import Button from "../../../components/Buttons/Button";
import { AiOutlineSave } from "react-icons/ai";

const ViewEditProduct = () => {
  const methods = useForm();
  return (
    <div className="">
      <Header />
      <div className="flex flex-col justify-center items-center py-3">

        <div className="flex flex-row justify-start items-center gap-2 w-full p-5">
          <IoArrowBackOutline size={32} />
          <p className="font-bold text-[18px]">Editar Producto</p>
        </div>

        <form className="w-[320px] lg:w-1/2 p-2 flex justify-center items-center flex-col gap-2 ">
          <FormProvider {...methods}>
            <Photo />

            <TextField
              label="Codigo"
              name="Codigo"
              type="text"
              Icon={false}
              isIcon={false}
              placeholder={"Codigo"}
              Error={""}
              isError={true}
              register={methods.register}
            />

            <TextField
              label="Nombre Producto"
              name="Nombre Producto"
              type="text"
              Icon={false}
              isIcon={false}
              placeholder={"Producto"}
              Error={""}
              isError={true}
              register={methods.register}
            />

            <TextField
              label="Marca"
              name="Marca"
              type="text"
              Icon={false}
              isIcon={false}
              placeholder={"Marca"}
              Error={""}
              isError={true}
              register={methods.register}
            />

            <TextField
              label="Precio Unitario"
              name="Precio Unitorio"
              type="text"
              Icon={false}
              isIcon={false}
              placeholder={"Precio Unitario"}
              Error={""}
              isError={true}
              register={methods.register}
            />

            <div className="w-full lg:w-1/2 lg:h-[40px]">
              <Button
                background="bg-blue"
                isIcon={true}
                texto="Exito"
                type="submit"
                Icon={<AiOutlineSave />}
                onClick={() => {}}
              />
            </div>
          </FormProvider>
        </form>
      </div>
    </div>
  );
};
export default ViewEditProduct;
