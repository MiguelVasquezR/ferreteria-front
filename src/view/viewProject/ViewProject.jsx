import Header from "../../components/Header/Header";
import TextField from "../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";

import { IoIosSearch, IoMdAdd } from "react-icons/io";

import { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";
import SuplierLoading from "../../components/Loadings/SuplierLoading/SuplierLoading";
import CardPresentationProject from "../../components/cardPresentationProject/CardPresentationProject";
import PropTypes from "prop-types";
import {
  dataProyectos,
  updateStatus,
} from "../../store/slices/project/project_reducers";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewProject = ({ setDataProyectos, setStatus, proyectosState }) => {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const cookie = new Cookies();
  const { proyectos } = proyectosState;
  const navigate = useNavigate();

  useEffect(() => {
    if (proyectos.length > 0) {
      return;
    }
    setIsLoading(true);
    setStatus("loading");
    const config = {
      method: "GET",
      url: `${import.meta.env.VITE_URL}/obra/obtener`,
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setDataProyectos(response.data);
          setStatus("succeeded");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
        setStatus("error");
        toast.error("Error al obtener los proyectos");
      });
  }, []);

  return (
    <>
      <Header />
      {isLoading && <SuplierLoading />}

      <div className="flex justify-center items-center flex-col">
        <h2 className="font-bold w-full p-5 text-[18px] lg:text-[24px]">
          Proyectos
        </h2>

        <form action="" className="w-[90%] lg:w-[50%]">
          <FormProvider {...methods}>
            <TextField
              name="busqueda"
              label="Buscar proyecto"
              placeholder="Buscar proyecto"
              isError={!!methods.formState.errors.busqueda}
              Error={methods.formState.errors.busqueda?.message}
              register={methods.register}
              type="text"
              isIcon={true}
              Icon={<IoIosSearch size={32} color="black" />}
            />
          </FormProvider>
        </form>

        <div className="w-full flex justify-end px-5 my-5">
          <div
            onClick={() => navigate("/proyecto/agregar")}
            className="w-[50px] h-[40px] lg:w-[200px] bg-primary flex gap-2 justify-center items-center rounded-md"
          >
            <IoMdAdd size={32} color="white" />
            <p className="text-white hidden lg:flex">Agregar Proyecto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  place-items-center">
          {proyectos?.map((proyecto, index) => (
            <CardPresentationProject proyecto={proyecto} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

ViewProject.propTypes = {
  setDataProyectos: PropTypes.func,
  setStatus: PropTypes.func,
  proyectosState: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    proyectosState: state.proyectos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataProyectos: (data) => dispatch(dataProyectos(data)),
    setStatus: (status) => dispatch(updateStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject);
