import Header from "../../../components//Header/Header";
import TextField from "../../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../../components/Buttons/Button";
import { AiOutlineSave } from "react-icons/ai";

const ViewEditSuplier = () => {
  const methods = useForm();
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center my-5">
        <div className="flex flex-row justify-start items-center gap-2 w-full p-5">
          <IoArrowBackOutline size={32} />
          <p className="text-[18px] font-bold">Editar Proveedor</p>
        </div>

        <form className="w-[320px] lg:w-1/2 p-2 flex justify-center items-center flex-col gap-2 ">
          <FormProvider {...methods}>
            <TextField
              label="Nombre del Proveedor"
              name="nombre"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              placeholder={"Nombre del Proveedor..."}
              register={methods.register}
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
              register={methods.register}
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
              register={methods.register}
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
              register={methods.register}
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
              register={methods.register}
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
              register={methods.register}
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
              register={methods.register}
            />

            <TextField
              label="Calle"
              name="Calle"
              type="text"
              Error={""}
              Icon={false}
              isError={true}
              isIcon={false}
              register={methods.register}
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
              register={methods.register}
            />

            <div className="w-full lg:w-[400px] lg:h-[40px]">
              <Button
                background="bg-blue"
                isIcon={true}
                texto="Guardar"
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

export default ViewEditSuplier;
