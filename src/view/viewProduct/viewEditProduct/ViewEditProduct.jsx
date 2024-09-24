import Header from "../../../components/Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Photo from "../../../components/Photo/Photo";
import Button from "../../../components/Buttons/Button";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineSave } from "react-icons/ai";

const ViewEditProduct = () => {
  const methods = useForm();
  return (
    <div className="">
      <Header />
       <div className="flex flex-col justify-center items-center py-3" >
        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <IoArrowBackOutline />
          <p> Editar texto</p>
        </div>

        <form className="w-[320px] p-5 m-5">
          <FormProvider {...methods}>
            <div>
              <Photo />
            </div>

            <TextField
              label="Codigo"
              name="Codigo"
              type="text"
              Icon={false}
              isIcon={false}
              placeholder={"Codigo"}
              Error={""}
              isError={true}
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
            />
          </FormProvider>

          <div>
            <Button  
            background="bg-blue"
            isIcon={true}
            texto="Exito"
            type="submit"
            Icon={<AiOutlineSave />}  
            onClick={()=>{}}
            />
          </div>

        </form>
      </div>
    </div>
  );
};
export default ViewEditProduct;
