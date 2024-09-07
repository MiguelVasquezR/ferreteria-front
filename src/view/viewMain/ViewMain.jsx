import { useForm, FormProvider } from "react-hook-form";
import TextField from "../../components/Form/TextField/TextField";
import { FaEyeSlash } from "react-icons/fa";

const FormComponent = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField
          label="Usuario"
          name="usuario"
          type="text"
          placeholder="Ingresa tu usuario"
          isIcon={true}
          Icon={FaEyeSlash}
          rules={{ required: "El nombre de usuario es obligatorio" }}
        />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
};

export default FormComponent;
