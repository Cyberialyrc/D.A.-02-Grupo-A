/*************************************************************************************************
ARCHIVO		: AdminRoute.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo JS que se encarga de simular la ruta protegoda que permita solo el acceso si se encuentra autenticado, sino, redirige al inicio.
*************************************************************************************************/

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = true; //Simula una autenticación, se puede cambiar true o false.

const AdminRoute = () => {
    // Si el usuario está autenticado, renderiza las rutas protegidas, de lo contrario, redirige al home.
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;