import React from "react";

const ButtonUi = ({ label, icon, className, clickHandler }) => {
  return (
    <button
      className={`relative p-3 overflow-hidden bg-transparent text-black after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full hover:after:bg-[#ffffff24] transition ${className}`}
      onClick={clickHandler}
    >
      {label}
      {icon ? icon : ""}
    </button>
  );
};

export default ButtonUi;
