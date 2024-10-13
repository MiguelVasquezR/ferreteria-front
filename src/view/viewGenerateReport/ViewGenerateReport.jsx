import { IoArrowBackOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { FormProvider, useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import CardReport from "../../components/cardReport/cardReport";

const ViewGenerateReport = () => {
  const methods = useForm();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />

      {/* Contenedor principal de la página */}
      <div className="flex flex-col w-full max-w-[2000px] mx-auto">
        {/* Contenedor para la flecha y el título */}
        <div className="flex flex-row items-center gap-2 w-full p-5 pl-0">
          {" "}
          {/* Alineado a la izquierda */}
          <IoArrowBackOutline size={32} />
          <p className="font-bold text-left text-[18px]">
            Generar reporte estadístico
          </p>
        </div>
      </div>

      {/* Texto de selección del reporte */}
      <div className="w-full px-5 my-5 text-center">
        <p className="font-bold text-[18px] mb-3">
          Seleccione la opción del reporte
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="w-full px-5 my-5 flex flex-col items-center">
        <form className="w-full max-w-[600px] mx-auto">
          <FormProvider {...methods}>
            <TextField
              isError={!!methods.formState.errors.buscador}
              Error={methods.formState.errors.buscador?.message}
              register={methods.register}
              name="buscador"
              type="text"
              isIcon={true}
              Icon={<RiArrowDownSLine size={32} color="black" />}
            />
          </FormProvider>
        </form>
        <br />

        {/* Botón para generar reporte */}
        <div className="w-full flex justify-end mt-4 max-w-[600px]">
          <div className="bg-[#F58A27] rounded-md text-white flex flex-row justify-center items-center p-2 gap-2 cursor-pointer w-full max-w-[200px] h-10">
            <span className="text-xl">Generar</span>
          </div>
        </div>
      </div>
      <br />
      {/* Productos más vendidos */}
      <div className="w-full px-10">
        <h3 className="font-bold text-center">Productos más vendidos</h3>
      </div>

      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
      </div>

      <br />

      {/* Productos menos vendidos */}
      <div className="w-full px-5">
        <h3 className="font-bold text-center">Productos menos vendidos</h3>
      </div>

      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
        <CardReport
          nombre=" "
          precio=" "
          cantidadVendida=" "
          imageUrl="https://m.media-amazon.com/images/I/51F6j0nht0L.__AC_SX300_SY300_QL70_ML2_.jpg"
        />
      </div>
    </div>
  );
};

export default ViewGenerateReport;
