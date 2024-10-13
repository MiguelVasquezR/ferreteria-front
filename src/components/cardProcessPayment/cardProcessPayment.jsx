import React from 'react';

const Card = ({ imageSrc, quantity, unitPrice, totalPrice, onRemove }) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
          <img src={imageSrc} alt="Producto" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Cantidad</p>
          <p className="text-sm">{quantity}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">Precio Unitario</p>
        <p className="text-sm">${unitPrice}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">Precio Total</p>
        <p className="text-sm">${totalPrice}</p>
      </div>
      <button 
        onClick={onRemove} 
        style={{ backgroundColor: "red" }} // Fondo rojo
        className="flex justify-center items-center w-8 h-8 rounded-full border border-white"
      >
      <span className="text-white text-lg">X</span> 

      </button>
    </div>
  );
};

export default Card;
