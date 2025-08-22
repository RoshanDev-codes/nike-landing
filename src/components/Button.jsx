import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red text-white border-coral-red"
      } flex border justify-center items-center px-7 py-4 gap-4 rounded-full text-lg font-montserrat leading-none`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
