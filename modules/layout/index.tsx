import React, { FC } from "react";
import { Types } from "./layout.types";
import { LayoutStyles } from "./layout.styles";

const Layout: FC<Types> = ({ header, body }) => {
  return (
    <div>
      <div className={LayoutStyles.base}>
        <div className="container mx-auto">{header}</div>
      </div>
      <div className="p-4 h-full">{body}</div>
    </div>
  );
};

export default Layout;
