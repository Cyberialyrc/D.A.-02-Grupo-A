/*************************************************************************************************
ARCHIVO		: index.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 03/11/2024
DESCRIPCIÓN	: Ejemplo de NodeJS con HTML, siendo que en este js se carga el archivo html, mostrando un mensaje.
*************************************************************************************************/
const http = require('http');
const fs = require('fs');

// Servidor que carga un archivo HTML y muestra un mensaje dinámico
http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('mensaje.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error al cargar la página HTML');
            } else {
                const mensajePersonalizado = data.replace('{mensaje}', 'Bienvenido a Node.js');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(mensajePersonalizado);
            }
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Página no encontrada');
        res.end();
    }
}).listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});