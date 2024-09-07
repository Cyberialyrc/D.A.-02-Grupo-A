//ARCHIVO : Window.js 
//AUTOR : Ricardo Gabriel Manrique Silva 
//FECHA : 07/09/24 
//DESCRIPCIÓN : Archivo JavaScript para el uso del objeto Window  
// Función para mostrar las propiedades del objeto Window
function mostrarPropiedadesWindow() {
    // Bucle para recorrer las propiedades del objeto 
    for (let propiedad in window) {
        // Se utiliza un try - catch por la seguridad del navegador 
        try {
            // Imprime la propiedad y el valor de la misma
            console.log(propiedad + ": " + window[propiedad]);
        } catch (error) {
            // En caso no se pueda acceder a la propiedad, se captura el error
            console.log("No se puede acceder a la propiedad: " + propiedad);
        }
    }

    // Métodos del objeto Window
    console.log("Ancho de la ventana: " + window.innerWidth); // Muestra el ancho de la ventana
    console.log("Alto de la ventana: " + window.innerHeight); // Muestra el alto de la ventana
    console.log("URL actual: " + window.location.href); // Muestra la URL actual de la página
    window.alert("Método alert de window."); // Muestra una alerta
}

// Se llama a la función
mostrarPropiedadesWindow();