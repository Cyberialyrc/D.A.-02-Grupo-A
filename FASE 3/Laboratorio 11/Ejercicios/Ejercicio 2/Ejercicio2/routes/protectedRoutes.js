/*************************************************************************************************
ARCHIVO		: protectedRoutes.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 20/11/2024
DESCRIPCIÓN	: Definición de rutas protegidas que requieren autenticación.
*************************************************************************************************/
const express = require('express'); // Importa el framework Express para manejar las rutas
const router = express.Router(); // Creación del route Express para las rutas
const verifyToken = require('../middlewares/authMiddleware');  // Importa el middleware de verificación de token para proteger las rutas

router.get('/protected1', verifyToken, (req, res) => { // Esta ruta utiliza el middleware `verifyToken` para validar el token JWT antes de procesar la solicitud
    res.json({ message: 'Acceso permitido a ruta protegida 1', user: req.user });  // Si el token es válido, responde con un mensaje de éxito y los datos del usuario
});

router.get('/protected2', verifyToken, (req, res) => { // Al igual que la anterior ruta, valida el token JWT antes de permitir el acceso
    res.json({ message: 'Acceso permitido a ruta progetida 2', user: req.user});  // Responde con un mensaje de éxito y los datos del usuario si el token es válido
});

module.exports = router;