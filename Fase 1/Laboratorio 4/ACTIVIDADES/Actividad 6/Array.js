//ARCHIVO : Array.js 
//AUTOR : Ricardo Gabriel Manrique Silva 
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para el uso del objeto Array  
// Función para mostrar las propiedades del objeto Array
function mostrarPropiedadesArray() {
    console.log("Propiedades y Métodos heredados del prototipo Array:");
    
    // Muestra todas las propiedades y métodos del array
    console.log(Object.getOwnPropertyNames(Array.prototype)); // No se utiliza un for como en window para recorrer las propiedades porque Array no tiene "Propiedades" como tal
    // Array a utilizar
    let array1 = [1, 2, 3, 4, 5];

    // Métodos del objeto Array
    console.log("Array original: " + array1);  // Array Original
    array1.push(6);  // Se añade un elemento al array (método push)
    console.log("Después de push(6): " + array1);  // Array después del push
    array1.pop();  // Se elimina al último elemento del array (método pop)
    console.log("Después de pop(): " + array1);  // Array después del pop
    array1.reverse();  // Se invierte el orden del array (método reverse)
    console.log("Array invertido: " + array1);  // Array invertido
}

// Se llama a la función
mostrarPropiedadesArray();