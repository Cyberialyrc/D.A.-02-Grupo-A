// Importa Express y crea el enrutador
var express = require('express');
var router = express.Router();

// Definición de rutas con HTML y estilos en línea

// Página de inicio
router.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Página de Inicio</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h1 style="color: #4CAF50;">Bienvenido a la Página de Inicio</h1>
                <p>Explora nuestro sitio web para conocer más.</p>
                <a href="/servicios" style="margin-right: 10px;">Servicios</a>
                <a href="/contacto" style="margin-right: 10px;">Contacto</a>
                <a href="/perfil">Perfil de Usuario</a>
            </body>
        </html>
    `);
});

// Página de servicios
router.get('/servicios', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Servicios</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h1 style="color: #2196F3;">Nuestros Servicios</h1>
                <p>Ofrecemos una variedad de servicios para satisfacer tus necesidades.</p>
                <a href="/">Volver a Inicio</a>
            </body>
        </html>
    `);
});

// Página de contacto
router.get('/contacto', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Contacto</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h1 style="color: #FF5722;">Contáctanos</h1>
                <p>Para cualquier consulta, puedes escribirnos al correo: contacto@ejemplo.com</p>
                <a href="/">Volver a Inicio</a>
            </body>
        </html>
    `);
});

// Página de perfil de usuario
router.get('/perfil', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Perfil de Usuario</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h1 style="color: #9C27B0;">Perfil de Usuario</h1>
                <p>Bienvenido a tu perfil. Aquí puedes ver y editar tus datos personales.</p>
                <a href="/">Volver a Inicio</a>
            </body>
        </html>
    `);
});

// Exporta el enrutador
module.exports = router;
