//ARCHIVO : scriptArraysFunctions.js
//AUTOR : Percy Aaron Lujan Biamonte
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para utilizar diferentes funciones en arrays
// Acceder a un elemento del array mediante su índice
function accederElementoArray(array, indice) {
    if (indice >= 0 && indice < array.length) {
        return array[indice];
    } else {
        return "Índice fuera de rango.";
    }
}

// Recorrer un array
function recorrerArray(array) {
    return array.join(", ");
}

// Añadir un elemento al final de un array
function agregarElementoFinal(array, elemento) {
    array.push(elemento);
    actualizarVistaArray();
}

// Eliminar el último elemento de un array
function eliminarUltimoElemento(array) {
    array.pop();
    actualizarVistaArray();
}

// Añadir un elemento al principio de un array
function agregarElementoPrincipio(array, elemento) {
    array.unshift(elemento);
    actualizarVistaArray();
}

// Eliminar el primer elemento de un array
function eliminarPrimerElemento(array) {
    array.shift();
    actualizarVistaArray();
}

// Encontrar el índice de un elemento en el array
function encontrarIndiceArray(array, elemento) {
    return array.indexOf(elemento);
}

// Función para actualizar la vista de los arrays en la página web
function actualizarVistaArray() {
    document.getElementById("numerosOutput").innerText = "Array de Números: " + recorrerArray(numeros);
    document.getElementById("palabrasOutput").innerText = "Array de Palabras: " + recorrerArray(palabras);
    let objetosTexto = objetos.map(obj => `Nombre: ${obj.nombre}, Edad: ${obj.edad}`).join(" | ");
    document.getElementById("objetosOutput").innerText = "Array de Objetos: " + objetosTexto;
}

// Funciones específicas para números
function accederNumero() {
    let indice = parseInt(prompt("Ingresa el índice para acceder en el array de números (ejemplo 2):"));
    alert("Elemento en la posición " + indice + ": " + accederElementoArray(numeros, indice));
}

function encontrarIndiceNumero() {
    let buscarNumero = parseInt(prompt("Ingresa el número para buscar su índice:"));
    alert("Índice del número " + buscarNumero + ": " + encontrarIndiceArray(numeros, buscarNumero));
}

// Funciones específicas para palabras
function accederPalabra() {
    let indice = parseInt(prompt("Ingresa el índice para acceder en el array de palabras (ejemplo 2):"));
    alert("Elemento en la posición " + indice + ": " + accederElementoArray(palabras, indice));
}

function encontrarIndicePalabra() {
    let buscarPalabra = prompt("Ingresa la palabra para buscar su índice:");
    alert("Índice de la palabra " + buscarPalabra + ": " + encontrarIndiceArray(palabras, buscarPalabra));
}
