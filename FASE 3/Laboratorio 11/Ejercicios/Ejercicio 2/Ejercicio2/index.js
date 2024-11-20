/*************************************************************************************************
ARCHIVO		: index.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 20/11/2024
DESCRIPCIÓN	: Archivo principal del servidor, encargado de inicializar la aplicación, configurar middlewares, definir las rutas públicas y enlazar las rutas protegidas.
*************************************************************************************************/
const express = require('express'); // Importa el framework Express para manejar las solicitudes y respuestas
const bodyParser = require('body-parser'); // Importa Body-Parser para parsear cuerpos JSON en las solicitudes
const authController = require('./controllers/authController'); // Importa el controlador de autenticación que maneja el inicio de sesión y generación de tokens
const protectedRoutes = require('./routes/protectedRoutes'); // Importa las rutas protegidas definidas en otro archivo

const app = express();

app.use(bodyParser.json()); // Middleware para parsear solicitudes con cuerpo JSON

app.post('/login', authController.login); // Define una ruta POST en `/login` que utiliza el controlador de autenticación para manejar el inicio de sesión

app.use('/api', protectedRoutes); // Usa las rutas definidas en el archivo `protectedRoutes` bajo el prefijo `/api`

app.listen(5000, () => { // Inicia el servidor en el puerto 5000
    console.log('El servidor se está ejecutando en http://localhost:5000');
});