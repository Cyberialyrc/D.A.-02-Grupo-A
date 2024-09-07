// Definición de la excepción personalizada "UserException"
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Función que devuelve el nombre del mes a partir de un número
function getMonthName(mo) {
  mo--; // Ajuste del número del mes para el índice del array (1 = Ene, 12 = Dic)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  if (months[mo] !== undefined) {
    return months[mo]; // Retorna el mes si el número está en el rango
  } else {
    throw new UserException('InvalidMonthNo'); // Lanza la excepción si el número es inválido
  }
}

let monthName;

try {
  // Instrucciones que intentan ejecutar
  const myMonth = 15; // 15 está fuera de los límites, lo que provoca una excepción
  monthName = getMonthName(myMonth);
} catch (e) {
  // Captura la excepción
  monthName = 'unknown'; // Se asigna 'unknown' si ocurre una excepción
  console.error(e.message, e.name); // Se maneja la excepción mostrando el mensaje y el nombre
}
