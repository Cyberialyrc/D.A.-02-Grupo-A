// ARCHIVO : scriptIterators.js
// AUTOR : Percy Aaron Lujan Biamonte
// FECHA : 07/09/24 
// DESCRIPCIÓN : Archivo JavaScript para iterar a los Arrays de diferentes maneras

// Función para aplicar iteradores sobre arrays
function aplicarIteradores() {
    // Iterador for sobre array de números
    let numerosFor = "";
    for (let i = 0; i < numeros.length; i++) {
        numerosFor += numeros[i] + " ";
    }
    document.getElementById("numerosOutput").innerText += "\nIterador for: " + numerosFor;

    // Iterador forEach sobre array de palabras
    let palabrasForEach = "";
    palabras.forEach(palabra => {
        palabrasForEach += palabra + " ";
    });
    document.getElementById("palabrasOutput").innerText += "\nIterador forEach: " + palabrasForEach;

    // Iterador while sobre array de objetos
    let objetosWhile = "";
    let index = 0;
    while (index < objetos.length) {
        objetosWhile += `Nombre: ${objetos[index].nombre}, Edad: ${objetos[index].edad} | `;
        index++;
    }
    document.getElementById("objetosOutput").innerText += "\nIterador while: " + objetosWhile;

    // Iterador do..while sobre array de objetos
    let objetosDoWhile = "";
    index = 0;
    do {
        objetosDoWhile += `Nombre: ${objetos[index].nombre}, Edad: ${objetos[index].edad} | `;
        index++;
    } while (index < objetos.length);
    document.getElementById("objetosOutput").innerText += "\nIterador do..while: " + objetosDoWhile;
}

// Llama a la función para aplicar iteradores después de agregar datos a los arrays
function aplicarIteradoresTrasIngreso() {
    // Llama a esta función después de agregar datos a los arrays
    aplicarIteradores();
}