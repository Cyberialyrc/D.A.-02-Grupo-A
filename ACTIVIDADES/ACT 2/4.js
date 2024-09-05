var answer = 42; // Inicialmente es un número.
answer = 'Gracias por todo el pescado...'; // Cambia el valor a una cadena de texto (string).
console.log(typeof answer); // "string". Muestra el tipo de dato actual de la variable answer.
//                       

console.log(parseInt("F", 16)); // 15. Convierte la cadena "F" de base 16 (hexadecimal) a número decimal.
console.log(parseInt("17", 8)); // 15. Convierte la cadena "17" de base 8 (octal) a número decimal.
console.log(parseInt("15", 10)); // 15. Convierte la cadena "15" de base 10 (decimal) a número decimal.
console.log(parseInt(15.99, 10)); // 15. Convierte el número 15.99 a entero (solo toma la parte entera).
console.log(parseInt("FXX123", 16)); // 15. Convierte la cadena "F" de base 16 a número decimal, ignora "XX123".
console.log(parseInt("1111", 2)); // 15. Convierte la cadena "1111" de base 2 (binario) a número decimal.
console.log(parseInt("15*3", 10)); // 15. Convierte la cadena "15" de base 10 a número decimal, ignora "*3".
console.log(parseInt("12", 13)); // 15. Convierte la cadena "12" de base 13 a número decimal.
console.log(parseInt("Hello", 8)); // NaN. No se puede convertir "Hello" a número en base 8.
console.log(parseInt("0x7", 10)); // 0. "0x7" es hexadecimal, pero base 10 no es válida para él.
console.log(parseInt("546", 2)); // NaN. Los dígitos "546" no son válidos en base 2.

//

var howMany = 10; 
alert("howMany.toString() is " + howMany.toString()); // "10". Convierte el número 10 a cadena.

alert("45 .toString() is " + 45 .toString()); // "45". Convierte el número 45 a cadena.

var x = 7;
alert(x.toString(2)); // "111". Convierte el número 7 a binario (base 2) y muestra "111".
