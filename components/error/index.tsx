import React, { FC } from "react";
import { ErrorTypes } from "./error.types";
import { ErrorStyles } from "./error.styles";

const Error: FC<ErrorTypes> = () => {
  return (
    <div className={ErrorStyles.base}>
      <div className={ErrorStyles.center}>
        <p className={ErrorStyles.text}>ERROR OR NO DATA...</p>
      </div>
    </div>
  );
};

export default Error;
