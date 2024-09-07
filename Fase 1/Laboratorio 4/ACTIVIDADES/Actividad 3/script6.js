function f() {
  try {
    console.log(0);
    throw 'bogus'; // Genera una excepción
  } catch (e) {
    console.log(1);  // Se ejecuta cuando ocurre la excepción
    return true;     // Este return es suspendido hasta que el bloque finally se complete
    console.log(2);  // No se alcanza debido al return anterior
  } finally {
    console.log(3);  // Se ejecuta siempre, independientemente de si ocurrió una excepción o no
    return false;    // Sobrescribe el return del bloque catch
    console.log(4);  // No se alcanza debido al return en finally
  }
  console.log(5);    // No se alcanza nunca debido al return en finally
}

console.log(f());  // Salida esperada: 0, 1, 3, false