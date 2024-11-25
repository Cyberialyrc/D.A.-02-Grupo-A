/*************************************************************************************************
ARCHIVO		: appointmentController.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 25/11/2024
DESCRIPCIÓN	: Archivo encargado del manejo de las operaciones CRUD del proyecto en la base de datos.
*************************************************************************************************/
const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');


// Crear una nueva cita
const createAppointment = async (req, res) => {
    try {
        // Crea una nueva instancia del modelo Appointment con los datos del cuerpo de la solicitud
        const newAppointment = new Appointment(req.body);
        // Guarda la nueva cita en la base de datos
        await newAppointment.save();
        // Responde con un estado 201 (creado) y los datos de la cita creada
        res.status(201).json(newAppointment);
    } catch (error) {
        // Si ocurre un error, responde con un estado 400 (solicitud incorrecta) y el mensaje de error
        res.status(400).json({ message: error.message });
    }
};

// Actualizar o crear una cita
const updateAppointment = async (req, res) => {
    // Obtiene el ID de la cita desde los parámetros de la URL
    const { id } = req.params;

    // Verifica si el ID proporcionado es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // Responde con un estado 400 (solicitud incorrecta) si el ID no es válido
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        // Busca una cita por ID y la actualiza con los datos proporcionados, o la crea si no existe
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            id, // El ID de la cita
            req.body, // Los datos para actualizar
            { new: true, upsert: true } // Devuelve el documento actualizado o lo crea si no existe
        );

        // Responde con un estado 200 (éxito) y los datos de la cita actualizada o creada
        res.status(200).json(updatedAppointment);
    } catch (error) {
        // Si ocurre un error, responde con un estado 400 (solicitud incorrecta) y el mensaje de error
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una cita por ID
const deleteAppointment = async (req, res) => {
    try {
        // Busca una cita por ID y la elimina de la base de datos
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        // Si no se encuentra la cita, responde con un estado 404 (no encontrado)
        if (!deletedAppointment) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        // Si la eliminación es exitosa, responde con un mensaje de confirmación
        res.json({ message: 'Cita eliminada exitosamente' });
    } catch (error) {
        // Si ocurre un error, responde con un estado 400 (solicitud incorrecta) y el mensaje de error
        res.status(400).json({ message: error.message });
    }
};

// Exporta las funciones para ser usadas en las rutas de la aplicación
module.exports = { createAppointment, updateAppointment, deleteAppointment };