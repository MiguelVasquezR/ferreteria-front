import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import Modal from "../../components/Modal/Modal";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaBarcode } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Button from "../../components/Buttons/Button";

const ViewSales = () => {
  const methods = useForm();

  return (
    <>
      <Header />

      <div className="relative p-5 w-full h-full">
        <h2 className="font-bold text-[18px] lg:text-[22px] w-full">Ventas</h2>

        <div className="flex justify-center items-center flex-col gap-5 max-w-[1200px] mx-auto">
          <form className="w-[320px] lg:w-[600px]">
            <FormProvider {...methods}>
              <TextField
                placeholder="Buscar producto"
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

          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-start">
              <MdModeEdit className="cursor-pointer" size={32} color="gray" />
              <MdDelete className="cursor-pointer" size={32} color="gray" />
            </div>

            <div className="bg-black rounded-md text-black flex flex-row justify-center items-center p-1 gap-1 cursor-pointer">
              <a
                href="/create-sale"
                className="flex flex-row justify-center items-center"
              >
                <FaBarcode size={32} color="white" />
                <p className="hidden lg:flex">Agregar Venta</p>
              </a>
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-start gap-5">
            <table className="w-full lg:w-[80%]">
              <thead>
                <tr className="table-row">
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Cliente
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Cantidad
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Precio/U
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Aquí se debería mapear las ventas */}

                {/* Fila para el Total a pagar */}
                <tr>
                  <td
                    className="border-solid border-[#d2d2d2] border-[1px] text-right"
                    colSpan="3"
                  >
                    Total a pagar
                  </td>
                  <td className="border-solid border-[#d2d2d2] border-[1px] text-center">
                    {/* Aquí se puede agregar el valor total dinámico */}
                    $0.00
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Vista previa de ventas no seleccionadas */}
            <div className="bg-primary h-[700px] max-h-[600px] place-items-center rounded-sm lg:flex justify-center items-center hidden">
              <h2 className="text-white text-[30px] font-bold text-center">
                Debes seleccionar una venta
              </h2>
            </div>
            
          </div>
          <div className="w-[200px] lg:w-[300px] lg:h-[50px] my-5">
            <Button
            background="bg-blue"
            isIcon={false}
            texto="Pagar"
            type=""
            Icon={false}
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ViewSales;
