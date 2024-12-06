import React from "react";

const ButtonUi = ({ label, icon, className, clickHandler, disabled }) => {
  return (
    <button
      className={`relative flex items-center justify-start gap-2 p-3 overflow-hidden ${className} after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full hover:after:bg-[#ffffff24] ${disabled ? "after:bg-[#ffffff72] cursor-not-allowed hover:after:bg-[#ffffff72]": null} transition`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {label}
      {icon ? icon : ""}
    </button>
  );
};

export default ButtonUi;
