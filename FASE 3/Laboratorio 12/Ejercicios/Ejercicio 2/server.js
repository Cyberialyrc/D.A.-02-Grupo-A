/*************************************************************************************************
ARCHIVO		: server.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 25/11/2024
DESCRIPCIÓN	: Archivo encargado de iniciar el servidor.
*************************************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/appointments', appointmentRoutes);

// Conectar a la base de datos y arrancar el servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});