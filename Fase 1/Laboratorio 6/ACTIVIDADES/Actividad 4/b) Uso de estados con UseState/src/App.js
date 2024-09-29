/*************************************************************************************************
ARCHIVO: App.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Componente principal de la aplicación que incluye el componente funcional `UseStateComponent` para manejar el estado del contador utilizando el hook `useState`.
*************************************************************************************************/

import React from 'react'; // Importa la librería React
import UseStateComponent from './components/UseStateComponent'; // Importa el componente funcional que utiliza useState para manejar el estado

function App() {
  // Renderiza el componente principal en la aplicación
  return (
    <div className="App">
      <UseStateComponent /> {/* Incluye el componente UseStateComponent en la interfaz */}
    </div>
  );
}

export default App; // Exporta el componente App para ser utilizado en otros archivos