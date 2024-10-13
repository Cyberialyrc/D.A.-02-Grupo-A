/*************************************************************************************************
ARCHIVO: App.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Componente principal de la aplicación que incluye el componente funcional `UseEffectComponent` para manejar el estado del contador utilizando los hooks `useState` y `useEffect`.
*************************************************************************************************/

import React from 'react'; // Importa la librería React
import UseEffectComponent from './components/UseEffectComponent'; // Importa el componente funcional que utiliza useState y useEffect

function App() {
  // Renderiza el componente principal en la aplicación
  return (
    <div className="App">
      <UseEffectComponent /> {/* Incluye el componente UseEffectComponent en la interfaz */}
    </div>
  );
}

export default App; // Exporta el componente App para ser utilizado en otros archivos