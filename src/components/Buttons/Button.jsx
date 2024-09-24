import PropTypes from "prop-types";

const Button = ({ texto, isIcon, Icon, onClick, type, background }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex flex-row justify-center items-center w-full h-full gap-2 rounded-md text-white p-1 font-georgia text-[18px] ${background}`}
    >
      {isIcon && <span>{Icon}</span>}
      {texto}
    </button>
  );
};

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired,
  Icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Button;
