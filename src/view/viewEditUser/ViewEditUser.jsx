import Header from "../../components/Header/Header";
import { IoArrowBackOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import { IoChevronDownOutline } from "react-icons/io5";

const ViewEditUser = () => {
  const methods = useForm();

  return (
    <div
      className="flex flex-col items-center"
      style={{ fontFamily: "Georgia", fontSize: "12px" }}
    >
      <Header />

      <div className="flex flex-row items-center gap-2 w-full p-5 pl-4 justify-start">
        <IoArrowBackOutline size={32} />
        <p className="font-bold text-left text-[18px]">Agregar Usuario</p>
      </div>

      <form className="flex flex-col mt-5 w-full max-w-[900px] px-4 md:px-40">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-5 w-full mt-4">
            <div className="mt-1 text-lg w-full text-left px-14">
              <b>Información Personal</b>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="nombre" className="pl-2 mb-1 text-lg">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="apellidoPaterno" className="pl-2 mb-1 text-lg">
                Apellido Paterno
              </label>
              <input
                id="apellidoPaterno"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="apellidoMaterno" className="pl-2 mb-1 text-lg">
                Apellido Materno
              </label>
              <input
                id="apellidoMaterno"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="telefono" className="pl-2 mb-1 text-lg">
                Teléfono
              </label>
              <input
                id="telefono"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="correo" className="pl-2 mb-1 text-lg">
                Correo
              </label>
              <input
                id="correo"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="rfc" className="pl-2 mb-1 text-lg">
                RFC
              </label>
              <input
                id="rfc"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="mt-1 text-lg w-full text-left px-14">
              <b>Dirección</b>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="calle" className="pl-2 mb-1 text-lg">
                Calle
              </label>
              <input
                id="calle"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="numero" className="pl-2 mb-1 text-lg">
                Número
              </label>
              <input
                id="numero"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="colonia" className="pl-2 mb-1 text-lg">
                Colonia
              </label>
              <input
                id="colonia"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="ciudad" className="pl-2 mb-1 text-lg">
                Ciudad
              </label>
              <input
                id="ciudad"
                type="text"
                className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none"
              />
            </div>

            <div className="mt-1 text-lg w-full text-left px-14">
              <b>Información de Empleado</b>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="tipoEmpleado" className="pl-2 mb-1 text-lg">
                Tipo de empleado
              </label>
              <div className="relative flex flex-col">
                <IoChevronDownOutline
                  size={20}
                  className="absolute top-10 right-3"
                />
                <input
                  id="tipoEmpleado"
                  type="text"
                  className="shadow-md rounded-lg p-3 w-full outline-none bg-gradient-to-r from-gray-200 to-gray-300 border-none pr-10 mt-6"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="sueldo" className="pl-2 mb-1 text-lg">
                Sueldo
              </label>
              <input
                id="sueldo"
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

export default ViewEditUser;
