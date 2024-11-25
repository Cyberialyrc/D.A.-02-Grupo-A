/*************************************************************************************************
ARCHIVO		: appointmentModel.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 25/11/2024
DESCRIPCIÓN	: Archivo encargado de definir el esquema de la colección.
*************************************************************************************************/
const mongoose = require('mongoose');

// Define el esquema de la colección `Appointment` en la base de datos
const appointmentSchema = new mongoose.Schema({
    // Campo "cliente": debe ser un string y es obligatorio
    cliente: { type: String, required: true },
    // Campo "fecha": debe ser un valor de tipo fecha y es obligatorio
    fecha: { type: Date, required: true },
    // Campo "hora": debe ser un string (por ejemplo, "14:00") y es obligatorio
    hora: { type: String, required: true },
    // Campo "servicio": debe ser un string que describa el servicio y es obligatorio
    servicio: { type: String, required: true },
});

// Exporta un modelo llamado "Appointment" basado en el esquema definido
module.exports = mongoose.model('Appointment', appointmentSchema);