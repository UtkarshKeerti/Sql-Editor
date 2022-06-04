import React from "react";
import "./button.css";

const ButtonCustom = ({
  btnText,
  primary,
  secondary,
  leftIcon,
  rightIcon,
  customStyle,
  settable
}) => {
  const tname = "categories"

  return (
    <button
      className={
        "buttonClass" +
        ` ${primary ? "primaryBtn" : secondary ? "secondaryBtn" : ""}`
      }
      style={customStyle}
      onClick={() => {
        settable(tname)
      }}
    >

      {leftIcon}
      <span className="text">{btnText}</span>
      {rightIcon}
    </button>
  );
};

export default ButtonCustom;
