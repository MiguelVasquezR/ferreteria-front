import { useState } from "react";
import Logo from "../../../public/bitmap.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="bg-F58A27 w-screen h-screen relative font-georgia text-white flex justify-center items-center">
        <IoMdCloseCircle
          onClick={() => {
            setIsOpen(false);
          }}
          color="white"
          size={32}
          className="absolute right-5 top-5"
        />

        <ul className="flex flex-col justify-center items-center gap-5 text-[20px]">
          <a href="/">
            <li className="hover:underline">Inicio</li>
          </a>
          <a href="/products">
            <li className="hover:underline">Productos</li>
          </a>
          <a href="/supliers">
            <li className="hover:underline">Proveedores</li>
          </a>
          <a href="">
            <li className="hover:underline">Generar Código</li>
          </a>
          <a href="">
            <li className="hover:underline">Opciones</li>
          </a>
          <a href="">
            <li className="hover:underline">Cerrar Sesión</li>
          </a>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-F58A27 w-full h-[80px] flex flex-row justify-between items-center px-5 text-white font-georgia text-[18px]">
      <picture className="flex justify-center items-center">
        <img src={Logo} alt="" className="w-[60px] h-[60px]" />
      </picture>

      <div className="hidden lg:flex">
        <ul className="flex flex-row justify-center items-center gap-5 text-[20px]">
          <a href="/">
            <li className="hover:underline">Inicio</li>
          </a>
          <a href="/products">
            <li className="hover:underline">Productos</li>
          </a>
          <a href="/supliers">
            <li className="hover:underline">Proveedores</li>
          </a>
          <a href="">
            <li className="hover:underline">Generar Código</li>
          </a>
          <a href="">
            <li className="hover:underline">Opciones</li>
          </a>
          <a href="">
            <li className="hover:underline">Cerrar Sesión</li>
          </a>
        </ul>
      </div>

      <RxHamburgerMenu
        onClick={() => {
          setIsOpen(true);
        }}
        color="white"
        size={32}
        className="cursor-pointer lg:hidden"
      />
    </div>
  );
};

export default Header;
