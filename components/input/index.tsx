import React, { FC } from "react";
import { styles } from "./input.styles";
import { InputTypes } from "./input.types";
const Input: FC<InputTypes> = ({
  type = "text",
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={styles}
      />
    </div>
  );
};

export default Input;
