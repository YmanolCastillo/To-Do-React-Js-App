import React from "react";
import { Props } from "./types";

const InputField = ({ value, onChange, placeholder, type = "text" }: Props) => {
  return (
    <div className="md:col-span-5">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10rounded-lg p-2 border-solid border-2 border-blue-300 mt-1 rounded px-4 w-full"
      />
    </div>
  );
};

export default InputField;
