/*************************************************************************************************
ARCHIVO		: database.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 25/11/2024
DESCRIPCIÓN	: Archivo encargado de definir las rutas.
*************************************************************************************************/
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Intenta conectar a la base de datos MongoDB en la URL especificada
        await mongoose.connect('mongodb://localhost:27017/appointmentAPI', {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        // Muestra un mensaje en la consola si la conexión es exitosa
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        // Muestra un mensaje de error en la consola si la conexión falla
        console.error('Error al conectar a MongoDB:', error.message);
        // Finaliza el proceso con un código de error (1) para indicar que ocurrió un fallo
        process.exit(1);
    }
};

// Exporta la función para que pueda ser usada en otros archivos
module.exports = connectDB;