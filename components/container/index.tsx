import React, { FC } from "react";
import { ContainerTypes } from "./contaner.types";
import { baseStyle } from "./container.styles";

const Container: FC<ContainerTypes> = ({ children }) => {
  return (
    <div className={baseStyle.parent}>
      <div className={baseStyle.child}>{children}</div>
    </div>
  );
};

export default Container;
