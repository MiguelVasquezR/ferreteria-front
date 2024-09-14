import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

const TextField = ({ label, name, type, placeholder, isIcon, Icon }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-center items-start gap-2 w-full">
      <label className="pl-2 w-full">{label}</label>
      <div className="relative w-full">
        <input
          placeholder={placeholder}
          type={type}
          {...register(name)}
          className={`shadow-md rounded-md p-1 w-full outline-none pr-8 ${
            errors[name] ? "border-red-500" : ""
          }`}
        />
        {isIcon && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <Icon />
          </span>
        )}
      </div>
      {errors[name] && (
        <p className="text-error text-s pl-2">{errors[name].message}</p>
      )}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isIcon: PropTypes.bool,
  Icon: PropTypes.elementType,
};

export default TextField;
