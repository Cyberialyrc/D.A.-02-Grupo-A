/*************************************************************************************************
ARCHIVO: StateClassComponent.js
AUTOR: Ricardo Gabriel Manrique Silva
FECHA: 29/09/24
DESCRIPCIÓN: Un componente de clase que maneja el estado de un contador e implementa un botón para incrementar el valor del contador.
*************************************************************************************************/
import React, { Component } from 'react'; // Importa React y la clase Component para crear componentes de clase

class StateClassComponent extends Component {
  constructor(props) {
    super(props); // Llama al constructor de la clase padre
    this.state = {
      count: 0 // Inicializa el estado count en 0
    };
  }

  // Método que incrementa el contador en 1
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 }); // Actualiza el estado del contador con el nuevo valor
  };

  render() {
    // Renderiza el contenido del componente en la interfaz de usuario
    return (
      <div>
        <h1>Contador: {this.state.count}</h1> {/* Muestra el valor actual del contador */}
        <button onClick={this.incrementCount}>Incrementar</button> {/* Botón que incrementa el contador al hacer click */}
      </div>
    );
  }
}

export default StateClassComponent; // Exporta el componente para su uso en otros archivos