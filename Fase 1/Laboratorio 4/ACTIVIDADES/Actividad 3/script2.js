function sayHello() {
  return () => {
    console.log("Hello!");
  }
}

const hello = sayHello(); // Guarda la función retornada en la variable 'hello'
hello(); // Invoca la función que imprime "Hello!"
