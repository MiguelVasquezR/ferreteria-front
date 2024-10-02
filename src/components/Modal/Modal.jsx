const Modal = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 w-[300px] lg:w-[400px] mx-auto border-[#a2a2a2] border-[0.5px] border-solid shadow-md rounded-lg bg-white">
      <div className="p-5">
        <h2 className="text-center">¿Eliminar Producto?</h2>
      </div>

      <div className="flex w-full">
        <button className="w-1/2 bg-error text-white py-2 rounded-l-lg">
          Cancelar
        </button>
        <button className="w-1/2 bg-succes text-white py-2 rounded-r-lg btn-times">
          Aceptar
        </button>
      </div>
    </div>
  );
};
export default Modal;