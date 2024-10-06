/*************************************************************************************************
ARCHIVO		: Admin.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo encargado de representar la página de administración, la cual solo es visible si el usuario está autenticado.
*************************************************************************************************/
import React from 'react';

const Admin = () => {
  return (
    <div>
      <h1>Página de administrador</h1>
      <p>Solo accesible a personal autorizado.</p>
    </div>
  );
};

export default Admin;