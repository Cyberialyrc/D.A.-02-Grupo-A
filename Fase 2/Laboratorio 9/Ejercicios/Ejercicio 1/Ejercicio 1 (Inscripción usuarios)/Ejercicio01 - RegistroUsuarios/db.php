<!-----------------------------------------------------------------------------------
ARCHIVO: db.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Archivo encargado de hacer la conexión a la base de datos
------------------------------------------------------------------------------------>
<?php
$host = 'localhost';
$dbname = 'registro_usuarios';
$username = 'root';
$password = '';  

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>