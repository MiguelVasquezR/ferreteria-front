import Header from "../../components/Header/Header";

import TextField from "../../components/Form/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "../../components/Modal/Modal";

const ViewProducts = () => {
  const methods = useForm();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productosFiltrados = useMemo(() => {
    return products.filter((producto) =>
      producto.nombre
        ?.toLowerCase()
        .includes(methods.watch("buscador").toLowerCase())
    );
  }, [products, methods.watch("buscador")]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      url: `${import.meta.env.VITE_URL}/producto/obtener-productos`,
    };

    axios
      .request(config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        toast.error("Error al obtener los productos");
      });
  }, []);


  return (
    <>
      <Header />
      <Modal />
      <div className="m-5">
        <h2 className="font-bold text-[18px] lg:text-[22px]">Productos</h2>

        <div className="flex justify-center items-center flex-col gap-5 max-w-[1600px] mx-auto">
          <form className="w-[320px] lg:w-[600px]">
            <FormProvider {...methods}>
              <TextField
                placeholder="Buscar producto"
                isError={!!methods.formState.errors.search}
                Error={methods.formState.errors.search?.message}
                register={methods.register}
                name="buscador"
                type="text"
                isIcon={true}
                Icon={<IoIosSearch size={32} color="black" />}
              />
            </FormProvider>
          </form>

          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-start">
              <MdModeEdit className="cursor-pointer" size={32} color="black" />
              <MdDelete className="cursor-pointer" size={32} color="black" />
            </div>

            <div className="bg-F58A27 rounded-md text-white flex flex-row justify-center items-center p-1 gap-1 cursor-pointer">
              <FaPlus size={32} color="white" />
              <a href="/create-product" className="hidden lg:flex">
                Agregar Producto
              </a>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-5">
            <table className="col-span-3 lg:col-span-2">
              <thead>
                <tr className="table-row">
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Foto
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Nombre
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Cantidad Disponible
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px]">
                    Costo
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px] hidden lg:table-cell">
                    Precio menudeo
                  </th>
                  <th className="border-solid border-[#d2d2d2] border-[1px] hidden lg:table-cell">
                    Precio mayoreo
                  </th>
                </tr>
              </thead>

              <tbody>
                {productosFiltrados.map((product, index) => {
                  return (
                    <tr
                      key={index}
                      className="table-row"
                      onClick={() => {
                        setSelectedProduct(product);
                      }}
                    >
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center flex justify-center items-center p-2">
                        <img
                          src={product.url_image}
                          className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-contain rounded-md"
                        />
                      </td>
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center ">
                        {product.nombre}
                      </td>
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center ">
                        {product.cantidad}
                      </td>
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center ">
                        {product.costo}
                      </td>
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center  hidden lg:table-cell">
                        {product.precio_menudeo}
                      </td>
                      <td className="border-solid border-[#d2d2d2] border-[1px] text-center  hidden lg:table-cell">
                        {product.precio_mayoreo}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {selectedProduct !== null ? (
              <div className="bg-F58A27 col-span-1 max-h-[600px] place-items-center rounded-md p-5 text-white hidden lg:block">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h2 className="font-bold text-[22px] my-1">
                      Información del Producto
                    </h2>
                    <h2>Nombre: {selectedProduct?.nombre}</h2>
                    <p>Cantidad disponible: {selectedProduct?.cantidad}</p>
                    <p>Costo de proveedor: ${selectedProduct?.costo}</p>
                    <p>
                      Precio por menudeo: ${selectedProduct?.precio_menudeo}
                    </p>
                    <p>
                      Precio por mayoreo: ${selectedProduct?.precio_mayoreo}
                    </p>
                  </div>

                  <img
                    src={selectedProduct?.url_image}
                    className="w-[120px] h-[120px] rounded-md"
                  />
                </div>

                <div>
                  <h2 className="font-bold text-[22px] my-1">
                    Información del Proveedor
                  </h2>
                </div>
              </div>
            ) : (
              <div className="bg-F58A27 col-span-1 max-h-[600px] place-items-center rounded-sm lg:flex justify-center items-center hidden">
                <h2 className="text-white text-[30px] font-bold">
                  Debes seleccionar un producto
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
