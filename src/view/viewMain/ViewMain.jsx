import Photo from "../../components/Photo/Photo";
import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Buttons/Button";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosSave } from "react-icons/io";

const FormComponent = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="w-[30%] bg-black flex justify-center items-center flex-col gap-3"
    >
      <FormProvider {...methods}>
        <Photo />
        <TextField
          label="Usuario"
          name="usuario"
          type="text"
          Icon={null}
          isIcon={false}
          placeholder={"Ingresa tu Usuario"}
        />
      </FormProvider>
      <Button
        texto="Enviar"
        tipo="guardar"
        Icon={IoIosSave}
        size={32}
        isIcon={true}
      />
    </form>
  );
};

export default FormComponent;
