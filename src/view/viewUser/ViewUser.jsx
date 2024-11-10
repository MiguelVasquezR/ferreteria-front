import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Cookies } from "react-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { dataUsuarios } from "../../store/slices/users/users_reducer";
import SupliearLoading from "../../components/Loadings/SuplierLoading/SuplierLoading";
import Modal from "../../components/Modal/Modal";
import { FaTrash, FaPen, FaPlus } from "react-icons/fa";

const ViewUser = ({ setDataUsuarios, usuariosState, setStatus }) => {
  const cookie = new Cookies();
  const { usuarios } = usuariosState;
  const [isLoadingView, setIsLoadingView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [idDeletePackage, setIdDeletePackage] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false); // Corregido: isLoadingDelete

  useEffect(() => {
    if (usuarios.length > 0) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "GET",
      url: `${import.meta.env.VITE_URL}/usuario/obtener-usuarios`,
    };

    setIsLoadingView(true);
    axios
      .request(config)
      .then((response) => {
        setDataUsuarios(response.data);
        setIsLoadingView(false);
      })
      .catch(() => {
        toast.error("Error al obtener los usuarios");
        setIsLoadingView(false);
      });
  }, []);

  const handleDelete = () => {
    setIsLoadingDelete(true); // Inicia el indicador de carga de eliminación
    const config = {
      method: "DELETE",
      url: `${import.meta.env.VITE_URL}/paquete/eliminar?idPaquete=${idDeletePackage}`,
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then(() => {
        toast.success("Paquete eliminado con éxito");
        setShowModal(false);
        setDataUsuarios(usuarios.filter((user) => user.id !== idDeletePackage));
      })
      .catch(() => {
        toast.error("Error al eliminar el paquete");
        setShowModal(false);
      })
      .finally(() => {
        setIsLoadingDelete(false); // Termina el indicador de carga
      });
  };

  return (
    <>
      {showModal && (
        <div className="absolute z-50 flex justify-center items-center w-screen h-screen bg-black/50">
          <Modal
            text="¿Estás seguro de que deseas eliminar el producto?"
            onDelete={handleDelete}
            onCancel={() => setShowModal(false)}
            isLoading={isLoadingDelete} // Corregido: isLoadingDelete
          />
        </div>
      )}

      <Header />

      {isLoadingView && (
        <div className="w-screen h-screen absolute">
          <SupliearLoading />
        </div>
      )}

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center p-5 w-full">
          <p className="font-bold text-[24px]">Usuarios</p>

          <div className="flex flex-row items-center gap-3">
            <FaTrash
              onClick={() => {
                setIdDeletePackage("ID_DEL_PAQUETE_A_ELIMINAR"); // Reemplaza con el ID del paquete
                setShowModal(true);
              }}
              color="black"
              size={24}
              className="cursor-pointer"
            />

            <div className="bg-F58A27 rounded-md text-white flex flex-row justify-center items-center p-1 gap-1 cursor-pointer">
              <a
                href="/add-user"
                className="flex flex-row justify-center items-center"
              >
                <FaPlus size={32} color="white" />
                <p className="hidden lg:flex">Agregar Usuario</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[90%]">
          <table className="w-full">
            <thead className="w-full">
              <tr className="w-full">
                <th>Nombre</th>
                <th>Teléfono</th>
                <th className="hidden lg:table-column">Correo</th>
                <th className="hidden lg:table-column">RFC</th>
                <th>Sueldo</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {usuarios?.map((user, index) => (
                <tr
                  key={index + user?.usuario}
                  className="border-solid border-black/30 border-b-[1px] p-1 text-center"
                >
                  <td>{user?.nombre}</td>
                  <td>{user?.telefono}</td>
                  <td className="hidden lg:table-column">{user?.correo}</td>
                  <td className="hidden lg:table-column">{user?.rfc}</td>
                  <td>{user?.sueldo}</td>
                  <td>{user?.usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

ViewUser.propTypes = {
  setDataUsuarios: PropTypes.func.isRequired,
  usuariosState: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    usuariosState: state.usuarios,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataUsuarios: (data) => dispatch(dataUsuarios(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);
