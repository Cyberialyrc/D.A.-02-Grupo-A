/*************************************************************************************************
ARCHIVO		: appointmentRoutes.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 25/11/2024
DESCRIPCIÓN	: Archivo encargado de definir las rutas.
*************************************************************************************************/
const express = require('express');
const router = express.Router();
// Importa las funciones del controlador de citas (crear, actualizar, eliminar)
const {
    createAppointment,
    updateAppointment,
    deleteAppointment,
} = require('../controllers/appointmentController');

// Ruta para crear una nueva cita (POST /api/appointments)
// Llama a la función `createAppointment` del controlador
router.post('/', createAppointment);

// Ruta para actualizar o crear una cita (PUT /api/appointments/:id)
// Llama a la función `updateAppointment` del controlador
router.put('/:id', updateAppointment);

// Ruta para eliminar una cita por ID (DELETE /api/appointments/:id)
// Llama a la función `deleteAppointment` del controlador
router.delete('/:id', deleteAppointment);

// Exporta router para que pueda ser utilizado en el archivo principal del servidor
module.exports = router;