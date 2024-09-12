//ARCHIVO : Number.js 
//AUTOR : Ricardo Gabriel Manrique Silva 
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para el uso del objeto Number  
// Función para visualizar las propiedades del objeto Number
function mostrarPropiedadesNumber() {
    console.log("Propiedades y métodos heredados del prototipo Number:");

    // Muestra todas las propiedades y métodos del número
    console.log(Object.getOwnPropertyNames(Number.prototype)); // No se utiliza un for como en window para recorrer las propiedades porque Number no tiene "Propiedades" como tal
    // Número a utilizar
    let numero = 12345;

    // Mostramos el valor original del número
    console.log("Número original: " + numero);

    // Métodos del objeto Number
    console.log("Número con 2 decimales fijos: " + numero.toFixed(2)); // Número a 2 decimales
    console.log("Número exponencial (2): " + numero.toExponential(2)); // Número en notación exponencial
    console.log("Valor máximo posible: " + Number.MAX_VALUE); // Valor máximo permitido para un número en JavaScript
}

// Se llama a la función
mostrarPropiedadesNumber();