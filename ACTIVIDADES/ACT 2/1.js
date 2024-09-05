{
    let variableBloque = 5; // Variable con ámbito de bloque. Solo accesible dentro de este bloque.
    const constanteBloque = 10; // Constante con ámbito de bloque. No se puede cambiar después de la asignación.
  
    console.log(variableBloque); // Imprime 5. La variable es accesible dentro del bloque.
    console.log(constanteBloque); // Imprime 10. La constante es accesible dentro del bloque.
  }
  
  // Fuera del bloque, las variables y constantes no están definidas.
  console.log(variableBloque); // Error: variableBloque no está definida fuera del bloque.
  console.log(constanteBloque); // Error: constanteBloque no está definida fuera del bloque.
  