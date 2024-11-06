import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { FaPlus } from "react-icons/fa6";
import { Cookies } from "react-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { dataUsuarios } from "../../store/slices/users/users_reducer";

const ViewUser = ({ setDataUsuarios, usuariosState }) => {
  const cookie = new Cookies();
  const { usuarios } = usuariosState;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "GET",
      url: `${import.meta.env.VITE_URL}/usuario/obtener-usuarios`,
    };

    axios
      .request(config)
      .then((response) => {
        setDataUsuarios(response.data);
      })
      .catch(() => {
        toast.error("Error al obtener los usuarios");
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center p-5 w-full">
          <p className="font-bold text-[24px]">Usuarios</p>

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

        <div className="w-[90%]">
          <table className="w-full">
            <thead className="w-full">
              <tr className="w-full">
                <th>Nombre</th>
                <th>Teléfono</th>
                <th className="hidden lg:table-row">Correo</th>
                <th className="hidden lg:table-row">RFC</th>
                <th>Sueldo</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {usuarios?.map((user, index) => {
                return (
                  <tr
                    key={index + user?.usuario}
                    className="border-solid border-black/30 border-b-[1px] p-1 text-center"
                  >
                    <td>{user?.nombre}</td>
                    <td>{user?.telefono}</td>
                    <td className="hidden lg:table-row">{user?.correo}</td>
                    <td className="hidden lg:table-row">{user?.rfc}</td>
                    <td>{user?.sueldo}</td>
                    <td>{user?.usuario}</td>
                  </tr>
                );
              })}
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
