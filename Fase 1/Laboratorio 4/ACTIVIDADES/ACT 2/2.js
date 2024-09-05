console.log(x === undefined); // true. La variable x es 'elevada' pero no inicializada, por lo que es undefined.

var x = 3; // x se inicializa con el valor 3.

// Declara una variable global myvar
var myvar = 'my value';

// Función autoejecutable
(function() {
  console.log(myvar); // undefined. La variable myvar es 'elevada' dentro de la función, pero aún no se ha inicializado.
  var myvar = 'valor local'; // Inicializa myvar dentro de la función, afectando solo a este contexto.
})();
