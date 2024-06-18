import React from "react";
import { Props } from "./types";

const Button = ({
  title,
  customClassName = "",
  icon,
  onPress,
  disabled,
}: Props) => {
  return (
    <button
      className={`${customClassName} p-2 rounded-lg flex items-center font-bold text-center bg-blue-200`}
      onClick={onPress}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
