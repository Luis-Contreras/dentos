import React from "react";

export const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">Mi Sitio Web</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <a className="hover:underline" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Acerca de
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Servicios
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
