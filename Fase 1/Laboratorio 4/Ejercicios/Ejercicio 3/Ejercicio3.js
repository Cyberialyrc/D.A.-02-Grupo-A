function generarContrasena(longitud, incluirMayusculas = true, incluirMinusculas = true, incluirNumeros = true, incluirSimbolos = true) {
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let caracteresDisponibles = '';
    let contrasena = '';
    
    if (incluirMayusculas) caracteresDisponibles += letrasMayusculas;
    if (incluirMinusculas) caracteresDisponibles += letrasMinusculas;
    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;
    
    if (caracteresDisponibles.length === 0) {
        throw new Error('Debes seleccionar al menos un tipo de carácter.');
    }
    
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasena += caracteresDisponibles[indiceAleatorio];
    }
    
    return contrasena;
}

// Ejemplo de uso:
let longitud = 12; // Puedes cambiar la longitud aquí
let contrasenaSegura = generarContrasena(longitud, true, true, true, true);
console.log('Contraseña generada:', contrasenaSegura);