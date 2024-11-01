import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { FaTrash, FaPen, FaPlus } from "react-icons/fa"; // Íconos de editar y borrar
import { FaBoxOpen } from "react-icons/fa"; // Ícono de la caja
<<<<<<< HEAD
import Modal from "../../components/Modal/Modal";
import { useEffect, useMemo, useState } from "react";

const ViewListPackage = () => {
  const packageData = {
    name: "nombre",
    products: ["Martillo", "Clavos"],
    description: "Paquete que te permite clavar cualquier cosa en tu hogar!",
    price: 200,
  };
  const [showModal, setShowModal] = useState(false);
=======
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
import SuplierLoading from "../../components/Loadings/SuplierLoading/SuplierLoading";

const ViewListPackage = ({ setDataPaquetes, setStatus, paquetesState }) => {
  const cookie = new Cookies();
  const { paquetes } = paquetesState;
  const [isLoadinView, setIsLoadingView] = useState(false);

  useEffect(() => {
    const config = {
      method: "GET",
      url: `${import.meta.env.VITE_URL}/paquete/obtener-paquetes`,
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    setIsLoadingView(true);
    setStatus("loading");
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setDataPaquetes(response.data);
          setStatus("succeeded");
          setIsLoadingView(false);
        }
      })
      .catch(() => {
        setIsLoadingView(false);
        setStatus("error");
        toast.error("Error al obtener los paquetes");
      });
  }, [setStatus]);
>>>>>>> de4fa7f8dda4d082695b5051ab01079a273ddb7f

  return (
<<<<<<< HEAD
    <div className="relative">
=======
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

>>>>>>> f24c288758c73e1c74b7078afd35438182550af0
      <Header />

      {isLoadinView && <SuplierLoading />}

      <div className="flex flex-col w-full max-w-[2000px] mx-auto">
<<<<<<< HEAD
        {/* Contenedor para la flecha y el título */}
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-2xl ml-4">Paquetes</h2>{" "}
          {/* Agregado margen a la izquierda */}
        </div>

        {/* Renderizado del paquete */}
        <div className="w-full max-w-lg mx-auto">
          {" "}
          {/* Aumentado el tamaño máximo */}
          {/* Contenedor del paquete con estilo */}
          <div
            className="card p-8 shadow-lg rounded-lg"
            style={{ fontFamily: "Georgia", fontSize: "12px" }}
          >
            {/* Contenedor superior con el nombre e ícono */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg">{packageData.name}</p>
              <FaBoxOpen style={{ color: "orange", fontSize: "2.5rem" }} />
            </div>

            {/* Contenedor horizontal de lista de productos y descripción */}
            <div className="flex justify-between mb-4">
              {/* Lista de productos */}
              <div className="flex-1">
                <p style={{ fontSize: "13px" }}>Lista de productos</p>
                <ul className="product-list mt-2" style={{ fontSize: "13px" }}>
                  {packageData.products.map((product, index) => (
                    <li key={index}>
                      {index + 1}. {product}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Descripción */}
              <div className="flex-1 ml-4">
                <p style={{ fontSize: "13px" }}>Descripción</p>
                <p style={{ fontSize: "13px" }}>{packageData.description}</p>
              </div>
            </div>

            {/* Contenedor inferior para las acciones y el precio */}
            <div className="flex justify-between items-center mt-4">
              {/* Íconos de acciones alineados horizontalmente */}
              <div className="actions flex">
                <FaTrash
                  onClick={() => setShowModal(true)}
                  style={{ color: "orange", fontSize: "2rem" }}
                  className="cursor-pointer"
                />
                <FaPen
                  style={{ color: "orange", fontSize: "2rem" }}
                  className="ml-2 cursor-pointer"
                />
              </div>
              <p className="font-bold price text-lg">
                Precio: ${packageData.price}
              </p>
            </div>
          </div>
=======
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
>>>>>>> de4fa7f8dda4d082695b5051ab01079a273ddb7f
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
