/*************************************************************************************************
ARCHIVO		: Layout.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo que se encarga de definir la estrutura básica de la aplicación con una barra de navegación y un contenedor para las rutas anidadas.
*************************************************************************************************/
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    {/* Barra de navegación con enlaces a Home, Cursos y Admin */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Cursos</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;