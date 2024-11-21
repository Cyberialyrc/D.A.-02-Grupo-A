var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Esto ya está bien
mongoose.connect('mongodb://localhost:27017/node-crud')
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((err) => console.log('Error al conectar con MongoDB:', err));
