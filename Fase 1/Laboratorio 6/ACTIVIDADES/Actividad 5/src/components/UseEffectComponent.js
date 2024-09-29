/*************************************************************************************************
ARCHIVO: UseEffectComponent.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Un componente funcional que utiliza los hooks useState y useEffect para manejar el estado del contador y actualizar el título del documento cuando cambia el valor del contador.
*************************************************************************************************/

// Componente funcional que utiliza los hooks useState y useEffect para manejar el estado de un contador
import React, { useState, useEffect } from 'react';

function UseEffectComponent() {
  // Hook useState que inicializa el estado del contador en 0
  const [count, setCount] = useState(0);

  // Hook useEffect que se ejecuta cada vez que cambia el valor del contador
  useEffect(() => {
    document.title = `Contador: ${count}`; // Cambia el título del documento al valor actual del contador
  }, [count]); // El efecto solo se ejecuta cuando cambia el valor de count

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

export default UseEffectComponent; // Exporta el componente para su uso en otros archivos