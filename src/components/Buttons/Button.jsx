import PropTypes from "prop-types";

const Button = ({ texto, isIcon, Icon, onClick, type, size, color, tipo }) => {
  let bg = "";

  switch (tipo) {
    case "guardar":
      bg = "bg-blue";
      break;
    case "exito":
      bg = "bg-succes";
      break;
    case "error":
      bg = "bg-error";
      break;
  }

  return (
    <div className={`flex flex-row justify-center items-center gap-2 w-full rounded-md text-white p-1 font-georgia text-[18px] ${bg}`}>
      {isIcon && <Icon size={size} color={color} />}
      <button onClick={onClick} type={type}>
        {texto}
      </button>
    </div>
  );
};

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  isIcon: PropTypes.bool,
  Icon: PropTypes.elementType,
  onClick: PropTypes.func,
  type: PropTypes.string,
  tipo: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
