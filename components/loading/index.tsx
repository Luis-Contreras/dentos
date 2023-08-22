import React, { FC } from "react";
import { Svg } from "./svg";
import { LoadingStyles } from "./loading.styles";
import { LoadingTypes } from "./loading.types";

const Loading: FC<LoadingTypes> = () => {
  return (
    <div className={LoadingStyles.base}>
      <div className={LoadingStyles.center}>
        <Svg />
        <p className={LoadingStyles.label}>Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
