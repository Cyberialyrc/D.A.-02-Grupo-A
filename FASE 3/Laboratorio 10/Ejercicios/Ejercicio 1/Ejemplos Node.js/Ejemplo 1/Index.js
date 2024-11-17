/*************************************************************************************************
ARCHIVO		: index.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 03/11/2024
DESCRIPCIÓN	: Ejemplo que funciona para sumar dos números.
*************************************************************************************************/
const http = require('http');
const url = require('url');

// Función de saludo inicial
function Startup(req, res) {
    const queryObj = url.parse(req.url, true).query;
    const name = queryObj.name || 'Usuario';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`¡Bienvenid@, ${name}! a la aplicación Node.js`);
    res.end();
    // EL valor de nombre pasa como http://localhost:3000/index?name=Nombre
    // Cambiando "Nombre" por el nombre de la persona / usuario
}

// Función suma de números
function Sum(req, res) {
    const queryObj = url.parse(req.url, true).query;
    const num1 = parseFloat(queryObj.num1);
    const num2 = parseFloat(queryObj.num2);
    // Los valores pasan como http://localhost:3000/suma?num1=10&num2=20
    // Cambiando los valores 10 y 20 respectivamente a los que se desee

    if (isNaN(num1) || isNaN(num2)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Ingrese dos números válidos');
        res.end();
        return;
    }

    const sum = num1 + num2;
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(`La suma de ${num1} y ${num2} es ${sum}`);
    res.end();
}

// Creación del servidor
const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;

    if (pathname === '/index') {
        Startup(req, res);
    } else if (pathname === '/suma') {
        Sum(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('Ruta no encontrada');
        res.end();
    }
});

// Inicio del servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})