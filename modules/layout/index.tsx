import React, { FC } from "react";
import { Types } from "./layout.types";

const Layout: FC<Types> = ({ header, body, footer }) => {
  return (
    <div>
      <div className="bg-blue-500 text-white p-4">{<>Hola</>}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Layout;
