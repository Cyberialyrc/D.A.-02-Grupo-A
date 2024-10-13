/*************************************************************************************************
ARCHIVO: App.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Componente principal de la aplicación que incluye el componente de clase `StateClassComponent` para manejar el estado del contador.
*************************************************************************************************/
import React from 'react'; // Importa la librería React
import StateClassComponent from './components/StateClassComponent'; // Importa el componente de clase que maneja el estado

function App() {
    // Renderiza el componente principal en la aplicación
  return (
    <div className="App">
      <StateClassComponent /> {/* Incluye el componente StateClassComponent en la interfaz */}
    </div>
  );
}

export default App; // Exporta el componente App para ser utilizado en otros archivos