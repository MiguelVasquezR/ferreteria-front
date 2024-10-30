import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { FaTrash, FaPen, FaPlus } from "react-icons/fa"; // Íconos de editar y borrar
import { FaBoxOpen } from "react-icons/fa"; // Ícono de la caja
import { Cookies } from "react-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { VscPackage } from "react-icons/vsc";
import {
  dataPaquetes,
  updateStatus,
} from "../../store/slices/package/package_reducers";

const ViewListPackage = ({ setDataPaquetes, setStatus, paquetesState }) => {
  const cookie = new Cookies();
  const { paquetes } = paquetesState;

  useEffect(() => {
    const config = {
      method: "GET",
      url: `${import.meta.env.VITE_URL}/paquete/obtener-paquetes`,
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    setStatus("loading");
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setDataPaquetes(response.data);
          setStatus("succeeded");
        }
      })
      .catch(() => {
        setStatus("error");
        toast.error("Error al obtener los paquetes");
      });
  }, [setStatus]);

  return (
    <div>
      {showModal && (
        <div className="absolute z-50 flex justify-center items-center w-screen h-screen bg-black/50">
          <Modal
            text="¿Estás seguro de que deseas eliminar el producto?"
            onDelete={() => {}}
            onCancel={() => {
              setShowModal(false);
            }}
          />
        </div>
      )}

      <Header />
      <div className="flex flex-col w-full max-w-[2000px] mx-auto">
        <div className="flex items-center m-5">
          <h2 className="font-bold text-2xl ml-4">Paquetes</h2>
          <div className="w-full flex justify-end px-5">
            <a
              href="/add-package"
              className="flex flex-row gap-1 bg-primary text-white p-2 rounded-md"
            >
              <FaPlus size={24} color="white" />
              <p className="hidden lg:flex">Agregar Paquete</p>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 bg-gray-100 mx-auto justify-center w-full">
          {paquetes &&
            paquetes.length > 0 &&
            paquetes.map((p, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] lg:w-[400px] shadow-md rounded-md p-5 flex flex-col gap-5 justify-between items-center"
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <p>{p.nombre}</p>
                    <FaBoxOpen color="#F58A27" size={32} />
                  </div>

                  <div className="flex flex-row justify-between items-center w-full">
                    <div>
                      <p>Lista de Productos</p>
                      <ul></ul>
                    </div>

                    <div>
                      <p className="font-bold">Descripción</p>
                      <p>{p.descripcion}</p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center gap-4">
                      <FaTrash color="#F58A27" size={24} />
                      <FaPen color="#F58A27" size={24} />
                    </div>
                    <p className="font-bold">Precio: ${p.precio}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

ViewListPackage.propTypes = {
  setDataPaquetes: PropTypes.func,
  setStatus: PropTypes.func,
  paquetesState: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    paquetesState: state.paquetes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataPaquetes: (data) => dispatch(dataPaquetes(data)),
    setStatus: (status) => dispatch(updateStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewListPackage);
