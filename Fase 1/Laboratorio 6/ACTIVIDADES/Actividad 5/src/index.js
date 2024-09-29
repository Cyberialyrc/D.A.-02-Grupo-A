/*************************************************************************************************
ARCHIVO: index.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Archivo de entrada principal de la aplicación que renderiza el componente `App` en el DOM, asegurando que el componente que usa `useState` y `useEffect` sea correctamente montado.
*************************************************************************************************/

import React from 'react'; // Importa React para habilitar el uso de componentes
import ReactDOM from 'react-dom'; // Importa ReactDOM para manejar el renderizado en el navegador
import App from './App'; // Importa el componente principal de la aplicación

// Renderiza el componente App dentro del elemento con el ID 'root' en el archivo HTML
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal App */}
  </React.StrictMode>,
  document.getElementById('root') // Hace referencia al elemento 'root' del DOM en el que se montará la aplicación
);