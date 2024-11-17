/*************************************************************************************************
ARCHIVO		: mysqlE.js
AUTOR		: Manrique Silva Ricardo Gabriel
FECHA		: 03/11/2024
DESCRIPCIÓN	: Ejemplo donde se hace la conexión a la db creada y una consulta a la tabla dentro de esta.
*************************************************************************************************/
const mysql = require('mysql');

// Configuración de conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libreria'
});

// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

// Consulta para listar libros
connection.query('SELECT * FROM libros', (error, results) => {
    if (error) {
        console.error('Error en la consulta:', error);
        return;
    }
    console.log('Listado de libros:', results);
});

// Cerrar conexión
connection.end();