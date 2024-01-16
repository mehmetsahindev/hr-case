import React from "react";

// style:   Filled, Outline, Link
// size:    M, L, XL
const Button = (props) => {
  const { type = "", style = "filled", size = "m", text = false, iconLeft = false, iconRight = false, className = "", onClick = () => {} } = props;

  const typeList = ["default", "primary", "white"];
  const styleList = ["filled", "outline", "link"];
  const sizeList = ["m", "l", "xl"];

  let classNames = ["btn", className];

  typeList.includes(type) ? classNames.push(`btn-${type}`) : classNames.push("btn-default");
  styleList.includes(style) ? classNames.push(`btn-${style}`) : classNames.push("btn-filled");
  sizeList.includes(size) ? classNames.push(`btn-${size}`) : classNames.push("btn-m");

  let buttonClassName = classNames.join(" ");

  return (
    <button className={buttonClassName} onClick={onClick}>
      {iconLeft != false && <div className="btn-icon-left">{iconLeft}</div>}
      {text != false && <p className="btn-text-container whitespace-nowrap">{text}</p>}
      {iconRight != false && <div className="btn-icon-right">{iconRight}</div>}
    </button>
  );
};

export default Button;
