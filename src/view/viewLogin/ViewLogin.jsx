import TextField from "../../components/Form/TextField/TextField";
import Button from "../../components/Buttons/Button";
import Logo from "../../../public/bitmap.png";

import { FormProvider, useForm } from "react-hook-form";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ViewLogin = () => {
  const methods = useForm();
  const [isErrorUser, setIsErrorUser] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isError, setIsError] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsErrorUser(false);
    setIsErrorPassword(false);
    setIsError("");
    if (data.usuario === "") {
      setIsErrorUser(true);
    }
    if (data.contrasena === "") {
      setIsErrorPassword(true);
    }
    if (data.usuario !== "" && data.contrasena !== "") {
      axios
        .post(`${import.meta.env.VITE_API_URL_BACK}/login`, data)
        .then((res) => {
          if (res.data === "Usuario o contraseña incorrectos") {
            setIsError(res.data);
          } else if (res.data === "Usuario autenticado") {
            const { access_token, rol } = res.headers;
            cookies.set("token", access_token, { path: "/" });
            cookies.set("rol", rol, { path: "/" });
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-screen h-screen bg-F58A27 flex justify-center items-center">
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white w-[320px] lg:w-[500px] lg:h-[600px] p-5 rounded-md flex flex-col gap-5 justify-center items-center"
      >
        <FormProvider {...methods}>
          <picture className="w-[120px] h-[120px]">
            <img
              src={Logo}
              alt="Logo de empresa"
              className="w-[120px] h-[120px]"
            />
          </picture>

          <h2>Iniciar Sesión</h2>

          <TextField
            label="Ingresa tu usuario o correo"
            name="user"
            type="text"
            isIcon={false}
            Icon={null}
            isError={isErrorUser}
            placeholder={"Usuario o correo"}
          />

          <TextField
            label="Ingresa tu contraseña"
            name="password"
            type="password"
            isIcon={true}
            Icon={IoIosEyeOff}
            isError={isErrorPassword}
            placeholder={"Usuario o correo"}
          />

          {isError !== "" && (
            <p className="text-error text-s pl-2">{isError}</p>
          )}

          <Button
            type="submit"
            texto="Iniciar Sesión"
            isIcon={false}
            Icon={null}
            background="bg-blue"
            onClick={() => {}}
          />
        </FormProvider>

        <a href="/forget-password" className="underline">
          Olvide Contraseña
        </a>
      </form>
    </div>
  );
};

export default ViewLogin;
