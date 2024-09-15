import PropTypes from "prop-types";

const Button = ({ texto, isIcon, Icon, onClick, type, background }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-2 w-full h-[40px] rounded-md text-white p-1 font-georgia text-[18px] ${background}`}
    >
      {isIcon && { Icon }}
      <button onClick={onClick} type={type} className="h-full w-full">
        {texto}
      </button>
    </div>
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
