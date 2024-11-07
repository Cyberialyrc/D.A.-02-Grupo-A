const express = require('express');
const app = express();
const PORT = 3005;

// Middleware de registro de solicitudes
const requestLogger = (req, res, next) => {
    const now = new Date();
    console.log(`[${now.toLocaleString()}] ${req.method} - ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
};

// Middleware de autenticación simulada
const authenticate = (req, res, next) => {
    const authenticated = false; // Cambia a 'true' para simular autenticación exitosa
    if (authenticated) {
        next(); // Usuario autenticado, pasa a la ruta
    } else {
        res.status(403).send(`
            <html>
                <body style="font-family: Arial; text-align: center;">
                    <h1 style="color: #FF5722;">Acceso Denegado</h1>
                    <p>No tienes permiso para acceder a esta ruta.</p>
                    <a href="/">Volver a la página principal</a>
                </body>
            </html>
        `);
    }
};

// Aplicar el middleware de registro a todas las rutas
app.use(requestLogger);

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="font-family: Arial; text-align: center;">
                <h1 style="color: #4CAF50;">Bienvenido a la API</h1>
                <p>Utilizando middleware para registro y autenticación.</p>
                <a href="/perfil">Ir a perfil (requiere autenticación)</a>
            </body>
        </html>
    `);
});

// Ruta protegida de perfil que usa el middleware de autenticación
app.get('/perfil', authenticate, (req, res) => {
    res.send(`
        <html>
            <body style="font-family: Arial; text-align: center;">
                <h1 style="color: #2196F3;">Perfil de Usuario</h1>
                <p>Bienvenido a tu perfil.</p>
                <a href="/">Volver a la página principal</a>
            </body>
        </html>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
