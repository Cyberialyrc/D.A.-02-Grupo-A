// Importa el paquete Express
var express = require('express');

// Crea una aplicación en Express
var app = express();

// Importa el archivo de rutas
var rutas = require('./rutas.js');

// Usa el enrutador importado para manejar las rutas
app.use('/', rutas);

// Configura el servidor para escuchar en el puerto 3005
app.listen(3005, function () {
    console.log('La aplicación está funcionando en el puerto 3005');
});
