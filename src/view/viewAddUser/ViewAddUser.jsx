import Header from "../../components/Header/Header";
import { IoArrowBackOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import { User } from "../../schema/SchemaUser";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

const ViewAddUser = () => {
  const methods = useForm({
    resolver: zodResolver(User),
    mode: "onChange",
  });
  const [tipoView, setTipoView] = useState({
    tipo: "",
    error: false,
  });

  const onChangeSelect = (e) => {
    setTipoView(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(tipoView);

    /* if (tipoView.tipo === "" || tipoView.tipo === undefined) {
      setTipoView({ ...tipoView, error: true });
      return;
    } */

    const dataToSend = {
      ...data,
      tipo: tipoView.tipo,
    };

    console.log(dataToSend);
  };

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

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col mt-5 w-full gap-5 max-w-[900px] px-4 md:px-40"
      >
        <FormProvider {...methods}>
          <div className="flex flex-col gap-5 w-full mt-4">
            <div className="mt-1 text-lg w-full text-left px-14">
              <b className="text-[25px]">Informacion Personal</b>
            </div>

            <TextField
              name="nombre"
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.nombre}
              Error={methods.formState.errors.nombre?.message}
            />

            <TextField
              name="telefono"
              label="Teléfono"
              type="text"
              placeholder="Nombre Completo"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.telefono}
              Error={methods.formState.errors.telefono?.message}
            />

            <TextField
              name="correo"
              label="Correo Personal"
              type="text"
              placeholder="Correo"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.correo}
              Error={methods.formState.errors.correo?.message}
            />

            <TextField
              name="rfc"
              label="RFC"
              type="text"
              placeholder="XXXXXXXXXXXXX"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.rfc}
              Error={methods.formState.errors.rfc?.message}
            />

            <div className="mt-1 text-lg w-full text-left px-14">
              <b className="text-[25px]">Dirección</b>
            </div>

            <TextField
              name="calle"
              label="Calle"
              type="text"
              placeholder="Calle"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.calle}
              Error={methods.formState.errors.calle?.message}
            />

            <TextField
              name="numero"
              label="Número de Casa"
              type="text"
              placeholder="10"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.numero}
              Error={methods.formState.errors.numero?.message}
            />

            <TextField
              name="colonia"
              label="Colonia"
              type="text"
              placeholder="Colonia"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.colonia}
              Error={methods.formState.errors.colonia?.message}
            />

            <TextField
              name="ciudad"
              label="Ciudad"
              type="text"
              placeholder="Ciudad"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.ciudad}
              Error={methods.formState.errors.ciudad?.message}
            />

            <div className="mt-1 text-lg w-full text-left px-14">
              <b className="text-[25px]">Información de Empleado</b>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="tipoEmpleado" className="pl-2 mb-1 text-lg">
                Tipo de empleado
              </label>

              <select
                onChange={onChangeSelect}
                className="shadow-md rounded-md p-2 w-full outline-none pr-8 lg:h-[44px] text-[14px]"
              >
                <option value="">Seleccionar</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Administrador">Administrador de Almacen</option>
                <option value="Gerente">Gerente</option>
              </select>
              {tipoView.error && (
                <p className="text-error text-sm pl-2">
                  Debe seleccionar una opción
                </p>
              )}
            </div>

            <TextField
              name="sueldo"
              label="Sueldo del Empleado"
              type="text"
              placeholder="1200"
              Icon={null}
              isIcon={false}
              register={methods.register}
              isError={methods.formState.errors.sueldo}
              Error={methods.formState.errors.sueldo?.message}
            />

            <div>
              <Button
                background="bg-[#F58A27]"
                isIcon={false}
                texto="Agregar Usuario"
                type="submit"
                Icon={null}
                isLoading={false}
                onClick={() => {}}
              />
            </div>
          </div>
        </FormProvider>
      </form>
    </div>
  );
};

export default ViewAddUser;
