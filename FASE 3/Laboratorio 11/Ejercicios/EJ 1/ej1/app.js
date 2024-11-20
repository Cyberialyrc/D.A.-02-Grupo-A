// Importar las dependencias necesarias
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir recibir datos en formato JSON
app.use(express.json());

// Lista de usuarios simulada (base de datos temporal)
let users = [
    { id: 1, name: 'Ana', email: 'ana@example.com' },
    { id: 2, name: 'Carlos', email: 'carlos@example.com' }
];

// GET /users - Obtener la lista de usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users - Crear un nuevo usuario
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Actualizar un usuario existente
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizamos los datos del usuario
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});

// DELETE /users/:id - Eliminar un usuario por su ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: `Usuario con ID ${userId} eliminado` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
