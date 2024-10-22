import Header from "../../components/Header/Header";
import { IoArrowBackOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../../components/cardAddPackage/cardAddPackage"; // Importa el componente Card circular

const ViewAddPackage = () => {
  const methods = useForm();

  return (
    <div style={{ fontFamily: 'Georgia', fontSize: '12px' }}> {/* Aplicando estilo en línea */}
      <Header />
      {/* Contenedor principal de la página */}
      <div className="flex flex-col w-full max-w-[2000px] mx-auto">
        {/* Contenedor para la flecha y el título */}
        <div className="flex flex-row items-center gap-2 w-full p-5 pl-0">
          <IoArrowBackOutline size={32} />
          <p className="font-bold text-left text-[18px]">Editar paquete</p>
        </div>
      </div>
      <div>
        <form className="flex flex-col items-start gap-5 lg:flex-row lg:items-start lg:justify-start">
          <FormProvider {...methods}>
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-5 ml-10">
              {/* Aumentado margen izquierdo con 'ml-10' */}
              {/* Campo de texto para Nombre */}
              <div className="flex flex-col w-full">
                <label htmlFor="nombre" className="pl-2 mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...methods.register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                  className={`shadow-md rounded-lg p-2 w-4/5 outline-none pr-8 lg:h-[44px] bg-gradient-to-r from-gray-200 to-gray-300 border-none ${
                    methods.formState.errors.nombre
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {methods.formState.errors.nombre && (
                  <p className="text-red-500 text-sm pl-2">
                    {methods.formState.errors.nombre.message}
                  </p>
                )}
              </div>
              {/* Campo de texto para Precio */}
              <div className="flex flex-col w-full">
                <label htmlFor="precio" className="pl-2 mb-1">
                  Precio
                </label>
                <input
                  id="precio"
                  type="text"
                  className={`shadow-md rounded-lg p-2 w-4/5 outline-none pr-8 lg:h-[44px] bg-gradient-to-r from-gray-200 to-gray-300 border-none`}
                />
              </div>
              {/* Campo de texto para Descripción */}
              <div className="flex flex-col w-full">
                <label htmlFor="descripcion" className="pl-2 mb-1">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  {...methods.register("descripcion", {
                    required: "Este campo es obligatorio",
                  })}
                  className={`shadow-md rounded-lg p-2 w-4/5 outline-none pr-8 lg:h-[100px] bg-gradient-to-r from-gray-200 to-gray-300 border-none ${
                    methods.formState.errors.descripcion
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {methods.formState.errors.descripcion && (
                  <p className="text-red-500 text-sm pl-2">
                    {methods.formState.errors.descripcion.message}
                  </p>
                )}
              </div>
            </div>
          </FormProvider>
        </form>
      </div>
      {/* Sección de Productos */}
      <h2 className="text-lg font-bold mt-8 ml-10">Productos</h2>

      <div className="flex justify-around mt-8">
        <Card />
        <Card />
        <Card />
      </div>
      {/* Alineado a la izquierda */}
      <div className="mt-4 ml-10">
        <h3>Lista</h3>
        <br />
        <ol className="list-decimal list-inside">
          <li>Martillo</li>
          <li>Clavo 1p</li>
        </ol>
      </div>
      {/* Botón Generar centrado y movido a la derecha */}
      <div className="w-full flex justify-end mt-8 max-w-[600px] ml-[400px]">
        <div className="bg-[#F58A27] rounded-md text-white flex flex-row justify-center items-center p-2 gap-2 cursor-pointer w-full max-w-[200px] h-10">
          <span className="text-xl">Generar</span>
        </div>
      </div>
    </div>
  );
};

export default ViewAddPackage;
  