/*************************************************************************************************
ARCHIVO		: authMiddleware.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 20/11/2024
DESCRIPCIÓN	: Middleware para verificar la validez de los tokens JWT.
*************************************************************************************************/
const jwt = require('jsonwebtoken'); // Importa el paquete jsonwebtoken para la verificación de tokens JWT
const { jwtSecret } = require('../config/config'); // Importa la clave secreta para verificar los tokens JWT desde config

const verifyToken = (req, res, next) => { // Middleware para verificar la validez de un token JWT
    const token = req.headers['authorization']?.split(' ')[1]; // Obtiene el token del encabezado 'Authorization' y elimina el prefijo 'Bearer '

    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado'}); // Si no se encuentra el token, responde con un error 403 (Prohibido)
    }

    jwt.verify(token, jwtSecret, (err, decoded) => { // Verifica la validez del token usando la clave secreta
        if (err) {
            return res.status(401).json({ message: 'Token inválido'}); // Si el token es inválido o ha expirado, responde con un error 401 (No autorizado)
        }
        req.user = decoded; // Si el token es válido, se almacena el payload decodificado en req.user
        next(); // Llama a la siguiente función en la cadena de middleware
    });
};

module.exports = verifyToken;