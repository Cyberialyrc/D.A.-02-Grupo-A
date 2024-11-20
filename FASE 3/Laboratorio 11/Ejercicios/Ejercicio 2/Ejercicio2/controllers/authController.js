/*************************************************************************************************
ARCHIVO		: authController.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 20/11/2024
DESCRIPCIÓN	: Controlador para la autenticación y generación de tokens.
*************************************************************************************************/
const jwt = require ('jsonwebtoken'); // Importa el paquete jsonwebtoken para la generación y verificación de tokens JWT
const { jwtSecret, jwtExpiresIn } = require('../config/config'); // Importa la clave secreta y el tiempo de expiración del token desde config

const login = (req, res) => { // Controlador para el login, encargado de autenticar al usuario y generar el token JWT
    const { username, password } = req.body; // Extrae el username y password del cuerpo de la solicitud

    if (username === 'admin' && password === 'password') {     // Valida las credenciales del usuario
        const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiresIn }); // Genera el token JWT, usando la clave secreta y el tiempo de expiración de config
        return res.json({ message: 'Autenticación exitosa', token}); // Devuelve una respuesta exitosa con el token generado
    }
    return res.status(401).json({ message: 'Credenciales incorrectas'}); // Si las credenciales son incorrectas, devuelve una respuesta con estado 401 (no autorizado)
};

module.exports = {
    login
};