/*************************************************************************************************
ARCHIVO		: config.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 20/11/2024
DESCRIPCIÓN	: Configuración del token JWT, incluyendo clave secreta y expiración.
*************************************************************************************************/
module.exports = {
    jwtSecret: 'ASKJAXk2jak.e9amn12394jWZlkcmAWklsmLmalkj3m', // Clave para firmar y verificar los tokens JWT
    jwtExpiresIn: '5m' // Tiempo de duración del token
}