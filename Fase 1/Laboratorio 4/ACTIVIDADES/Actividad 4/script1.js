// Creación de objeto usando iniciador de objetos (notación literal)
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

// Uso del objeto
persona.saludar(); // Imprime "Hola, soy Juan"