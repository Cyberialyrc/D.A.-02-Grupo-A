// Constructor de objetos
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Creando una instancia de Persona
const persona1 = new Persona("Carlos", 30);

// Uso del objeto
console.log(persona1.nombre); // Imprime "Carlos"
