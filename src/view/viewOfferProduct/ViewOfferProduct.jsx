import Header from "../../components/Header/Header";
import { IoArrowBackOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../../components/cardAddPackage/cardAddPackage";

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
          <div className="flex flex-col gap-5 w-full mt-4">
            <div className="flex flex-col w-full">
              <label htmlFor="nombre" className="pl-2 mb-1 text-lg">
                Precio
              </label>
              <input
                id="nombre"
                type="text"
                {...methods.register("nombre", {
                  required: "Este campo es obligatorio",
                })}
                className={`shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none ${
                  methods.formState.errors.nombre ? "border-red-500" : ""
                }`}
              />
              {methods.formState.errors.nombre && (
                <p className="text-red-500 text-sm pl-2">
                  {methods.formState.errors.nombre.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="precio" className="pl-2 mb-1 text-lg">
                Fecha conclusión
              </label>
              <input
                id="precio"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>
          </div>
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
