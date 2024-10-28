import { IoAddCircleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="relative flex justify-center items-center w-40 h-40 bg-gray-200 rounded-full shadow-lg"> {/* Círculo más grande */}
      {/* Este es el Card circular */}
      <div className="absolute">
        <img 
          src="https://http2.mlstatic.com/D_NQ_NP_994206-MLM52340464875_112022-O.webp" 
          alt="Imagen del producto" 
          className=" h-12 object-cover" 
        />
      </div>
      <div className="absolute bottom-0 right-0 p-1 z-10 transform translate-x-2 translate-y-2">
        <IoAddCircleOutline size={72} className="text-[#F58A27]" /> {/* Icono */}
      </div>
    </div>
  );
};

export default Card;
