/*************************************************************************************************
ARCHIVO: UseStateComponent.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Un componente funcional que utiliza el hook useState para manejar el estado de un contador. Implementa un botón que incrementa el valor del contador al ser presionado.
*************************************************************************************************/
// Componente funcional que utiliza el hook useState para manejar el estado de un contador
import React, { useState } from 'react';

function UseStateComponent() {
  // Hook useState que inicializa el estado del contador en 0
  const [count, setCount] = useState(0);

  // Función que incrementa el valor del contador
  const incrementCount = () => {
    setCount(count + 1); // Actualiza el estado del contador
  };

  // Renderiza el componente en la UI
  return (
    <div>
      <h1>Contador: {count}</h1> {/* Muestra el valor actual del contador */}
      <button onClick={incrementCount}>Incrementar</button> {/* Botón que incrementa el contador al hacer clic */}
    </div>
  );
}

export default UseStateComponent; // Exporta el componente para su uso en otros archivos