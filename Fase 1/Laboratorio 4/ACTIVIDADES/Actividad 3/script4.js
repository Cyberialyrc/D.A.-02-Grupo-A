function exampleFunction() {
  const x = "declared inside function";  // x solo puede usarse dentro de exampleFunction
  console.log("Inside function");
  console.log(x);  // Esto funciona bien
}

exampleFunction();  // Invoca la función para que se ejecute correctamente
