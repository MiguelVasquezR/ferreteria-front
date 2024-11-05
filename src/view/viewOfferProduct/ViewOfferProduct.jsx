import Header from "../../components/Header/Header";
import { IoArrowBackOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../../components/cardAddPackage/cardAddPackage";
import TextField from "../../components/Form/TextField/TextField";
const ViewOfferProduct = () => {
  const methods = useForm();

  return (
    <div
      className="flex flex-col items-center"
      style={{ fontFamily: "Georgia", fontSize: "12px" }}
    >
      <Header />

      <div className="flex flex-row items-center gap-2 w-full p-5 pl-4 justify-start">
        <IoArrowBackOutline size={32} />
        <p className="font-bold text-left text-[18px]">Agregar oferta</p>
      </div>

      <div className="mt-1 text-lg w-full text-left px-14">
        <p>Selecciona el producto</p>
      </div>
      <br />

      <div className="flex justify-center w-full px-4 md:px-20">
        <div className="flex flex-row justify-center gap-10 mt-1">
          {" "}
          <div className>
            <Card />
          </div>
          <div className>
            <Card />
          </div>
          <div className>
            <Card />
          </div>
        </div>
      </div>

      <form className="flex flex-col items-center mt-5 w-full max-w-[900px] px-4 md:px-40">
        <FormProvider {...methods}>
          <TextField
            label="Precio"
            name="precio"
            type="text"
            register={methods.register}
            Error={methods?.formState.errors?.nombre?.message}
            isError={!!methods?.formState.errors?.nombre?.message}
          />
          <br />
          <TextField
            label="Fecha conclusión"
            name="fecha"
            type="date"
            register={methods.register}
            Error={methods?.formState.errors?.nombre?.message}
            isError={!!methods?.formState.errors?.nombre?.message}
          />
        </FormProvider>
      </form>

      <div className="w-full flex justify-center mt-8 px-4">
        <div className="bg-[#F58A27] rounded-md text-white flex flex-row justify-center items-center p-2 cursor-pointer w-full max-w-[250px] h-12">
          <span className="text-xl">Generar</span>
        </div>
      </div>
    </div>
  );
};

export default ViewOfferProduct;
