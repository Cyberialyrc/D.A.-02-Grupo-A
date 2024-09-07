//ARCHIVO : Ejercicio2.js //
//AUTOR : Ricardo Gabriel Manrique Silva //
//FECHA : 07/09/24 //
//DESCRIPCIÓN : Archivo JavaScript para convertir grados celsius a fahrenheit y viceversa // 
function CelsiusToFahrenheit(celsius) { //Función para convertir grados celsius a fahrenheit
    return (celsius * 9/5) + 32;
}
function FahrenheitToCelsius(fahrenheit) { //Función para convertir grados fahrenheit a celsius.
    return (fahrenheit - 32) * 5/9;
}
function getTemperatureInput() {
    // Solicita la temperatura al usuario y verifica que sea un número válido
    let temperature;
    while (true) {
        temperature = parseFloat(prompt("Ingrese la temperatura: ")); //Ingreso de la temperatura
        if (!isNaN(temperature)) break; //Verifica que sea un número válido, sino entra al bucle denuevo
        console.log('Entrada no válida. Por favor, ingrese un número.');
    }
    return temperature;
}
function getScaleInput() {
    // Solicita la escala al usuario y verifica que sea 'C' o 'F'
    let scale;
    while (true) {
        scale = prompt("¿La temperatura se encuentra en Celsius o Fahrenheit? (C/F)").toUpperCase(); //Ingreso del tipo de temperatura, además lo convierte a mayúscula.
        if (scale === 'C' || scale === 'F') break; //Verifica que sea C o F, sino entra al bucle denuevo
        console.log('La escala ingresada no es correcta, por favor ingrese C o F.');
    }
    return scale;
}
function temperatureConvertorMain() { //Función principal donde se lleva a cabo el convertidor
    const temperature = getTemperatureInput();
    const scale = getScaleInput();
    if (scale === 'C') { //En el caso sea grados celsius
        const fahrenheit = CelsiusToFahrenheit(temperature); //Llama a la función de celsius a fahrenheit
        console.log(temperature + ' °C es igual a ' + fahrenheit.toFixed(2) + ' °F'); //Impresión de los datos
    } else if (scale === 'F') { //En el caso sea grados fahrenheit
        const celsius = FahrenheitToCelsius(temperature); //Llama a la función de fahrenheit a celsius
        console.log(temperature + ' °F es igual a ' + celsius.toFixed(2) + ' °C'); //Impresión de los datos
    } else { //En el caso se ingrese una opción que no esté de las indicadas
        console.log('La escala ingresada no es correcta, vuelva a ingresar los datos (C/F)'); //Impresión que el dato ingresado no es correcto
    }
}
temperatureConvertorMain();