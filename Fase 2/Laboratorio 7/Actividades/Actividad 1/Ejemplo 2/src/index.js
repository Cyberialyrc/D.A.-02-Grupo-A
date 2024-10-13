/*************************************************************************************************
ARCHIVO		: index.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo inicial. Renderiza el archivo principal "App" en el DOM utilizando "ReactDOM".
*************************************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);