// Creando un prototipo
const prototipoPersona = {
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

// Creando un nuevo objeto usando Object.create()
const persona2 = Object.create(prototipoPersona);
persona2.nombre = "Ana";
persona2.edad = 28;

// Uso del objeto
persona2.saludar(); // Imprime "Hola, soy Ana"
