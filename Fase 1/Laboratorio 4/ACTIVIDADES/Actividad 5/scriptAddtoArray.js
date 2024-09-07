//ARCHIVO : scriptAddtoArray.js
//AUTOR : Percy Aaron Lujan Biamonte
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para añadir diferentes tipos de datos a un array
let numeros = [];
let palabras = [];
let objetos = [];
// Función para agregar números
function agregarNumeros() {
    let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt("Ingresa un número:"));
        numeros.push(numero);
    }
    document.getElementById("numerosOutput").innerText = "Array de Números: " + numeros.join(", ");
}

// Función para agregar palabras
function agregarPalabras() {
    let cantidad = parseInt(prompt("¿Cuántas palabras deseas ingresar?"));
    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Ingresa una palabra:");
        palabras.push(palabra);
    }
    document.getElementById("palabrasOutput").innerText = "Array de Palabras: " + palabras.join(", ");
}

// Función para agregar objetos
function agregarObjetos() {
    let cantidad = parseInt(prompt("¿Cuántos objetos deseas ingresar?"));
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Ingresa el nombre:");
        let edad = parseInt(prompt("Ingresa la edad:"));
        let objeto = { nombre: nombre, edad: edad };
        objetos.push(objeto);
    }
    // Formateo para mostrar los objetos como texto
    let objetosTexto = objetos.map(obj => `Nombre: ${obj.nombre}, Edad: ${obj.edad}`).join(" | ");
    document.getElementById("objetosOutput").innerText = "Array de Objetos: " + objetosTexto;
}