import Header from "../../components/Header/Header";
import { FaTrash, FaPen } from "react-icons/fa"; // Íconos de editar y borrar
import { FaBoxOpen } from "react-icons/fa"; // Ícono de la caja
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
      {/* Contenedor principal de la página */}
      <div className="flex flex-col w-full max-w-[2000px] mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default ViewListPackage;
