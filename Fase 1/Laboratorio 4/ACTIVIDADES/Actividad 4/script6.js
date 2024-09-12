// Prototipo
const prototipoCoche = {
  conducir: function() {
    console.log("Conduciendo un " + this.marca);
  }
};

// Creando un objeto con Object.create() y agregando propiedades
const coche2 = Object.create(prototipoCoche);
coche2.marca = "Ford";
coche2.modelo = "Fiesta";
coche2.color = "Verde";

console.log(coche2); // Imprime {marca: "Ford", modelo: "Fiesta", color: "Verde"}
