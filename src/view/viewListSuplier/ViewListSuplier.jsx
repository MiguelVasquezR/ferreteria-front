import Header from "../../components/Header/Header";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../../components/Form/TextField/TextField";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Card from "../../components/cardSuplier/cardSuplier";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const ViewListSuplier = () => {
  const methods = useForm();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <Header />

      {
        openModal && (
          <div className="absolute w-screen h-screen bg-[#000]/60 flex justify-center items-center">
            <Modal />
          </div>
        )
      }

      <div className="flex flex-col justify-center items-center p-5 w-full mx-auto">
        <div className="w-full text-left">
          <p className="font-bold text-[18px]">Proveedores</p>
        </div>

        <div className="w-full px-5 my-5 text-center">
          <p className="font-bold text-[18px] mb-3">Busca tu proveedor</p>
          <form className="w-[320px] lg:w-[600px] mx-auto">
            <FormProvider {...methods}>
              <TextField
                placeholder="Buscar proveedor"
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
        </div>

        <div className="flex justify-end w-full">
          <a
            href="/create-product"
            className="bg-[#F58A27] rounded-md text-white flex flex-row justify-center items-center p-2 gap-2 cursor-pointer"
          >
            <FaPlus size={24} color="white" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 bg-gray-100 w-full mx-auto justify-center">
          <Card
            nombre="Cementos Lopez"
            telefono="+123456789"
            correo="info@transportes.com"
            id="1"
            direccion="Av. Xalapa, Xalapa, Ver."
            handleModal={() => setOpenModal(true)}
          />
          <Card
            nombre="Cementos Lopez"
            telefono="+123456789"
            correo="info@transportes.com"
            id="2"
            direccion="Av. Xalapa, Xalapa, Ver."
          />
          <Card
            nombre="Cementos Lopez"
            telefono="+123456789"
            correo="info@transportes.com"
            id="3"
            direccion="Av. Xalapa, Xalapa, Ver."
          />
          <Card
            nombre="Cementos Lopez"
            telefono="+123456789"
            correo="info@transportes.com"
            id="4"
            direccion="Av. Xalapa, Xalapa, Ver."
          />
        </div>
      </div>
    </div>
  );
};

export default ViewListSuplier;