import React, { FC } from "react";
import { Types } from "./layout.types";

const Layout: FC<Types> = ({ header, body, footer }) => {
  return (
    <div>
      <header className="bg-indigo-500 p-4 text-white">
        <div className="container mx-auto">{header}</div>
      </header>
      <div className="p-4 h-full">{body}</div>
    </div>
  );
};

export default Layout;
