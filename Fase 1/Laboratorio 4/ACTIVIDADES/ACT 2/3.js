function externa() {
    var externaVar = 10; // Variable local a la función externa
    function interna() {
      console.log(externaVar); // 10. La función interna accede a la variable externaVar de la función externa.
      var internaVar = 20; // Variable local a la función interna
      console.log(internaVar); // 20. La variable internaVar es accesible dentro de la función interna.
    }
    interna(); // Llama a la función interna.
    console.log(internaVar); // Error: internaVar no está definida en el ámbito de la función externa.
  }
  
  externa(); // Ejecuta la función externa.
  