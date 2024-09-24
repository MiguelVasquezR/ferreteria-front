import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../components/Buttons/Button";
import { AiOutlineSave } from "react-icons/ai";

const ViewEditSuplier = () => {
  const methods = useForm();
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <IoArrowBackOutline />
          <p>Editar Proveedor</p>
        </div>
        <form className="w-[320px] p-5 m-5 ">
          <FormProvider {...methods}>
            <TextField
              label="Nombre del Proveedor"
              name="Nombre"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Nombre del Proveedor..."}
            />

            <TextField
              label="Telefono"
              name="Telefono"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"228..."}
            />

            <TextField
              label="Correo"
              name="Correo"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"ejemplo@gmail.com"}
            />

            <TextField
              label="RFC"
              name="RFC"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"RFC"}
            />

            <TextField
              label="Saldo pendiente"
              name="SaldoPendiente"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"$"}
            />

            <TextField
              label="Ciudad"
              name="Ciudad"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Ciudad del proveedor"}
            />

            <TextField
              label="Colonia"
              name="Colonia"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Colonia del proveedor"}
            />

            <TextField
              label="Calle"
              name="Calle"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Calle del proveedor"}
            />

            <TextField
              label="Numero"
              name="Numero"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Numero del domicilio del proveedor"}
            />
          </FormProvider>

          <div>
            <Button
            background="bg-blue"
            isIcon={true}
            texto="Guardar"
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

export default ViewEditSuplier;
