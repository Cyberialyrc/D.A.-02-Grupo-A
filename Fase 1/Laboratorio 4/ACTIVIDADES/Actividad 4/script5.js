// Constructor
function Coche(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

// Creando una instancia y agregando una propiedad nueva
const coche1 = new Coche("Honda", "Civic");
coche1.color = "Azul";

console.log(coche1); // Imprime {marca: "Honda", modelo: "Civic", color: "Azul"}
