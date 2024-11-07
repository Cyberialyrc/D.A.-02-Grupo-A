<!-----------------------------------------------------------------------------------
ARCHIVO: confirmación.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Archivo que se encarga de mostrar la confirmación del registro de usuario
------------------------------------------------------------------------------------>
<?php 
include("template/header.php"); 
include("db.php"); // Conexión a la base de datos

// Obtiene el ID del usuario desde los parámetros de la URL
$id = $_GET['id'];

// Consulta para obtener los datos del usuario con el ID proporcionado
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = ?");
$stmt->execute([$id]);
$usuario = $stmt->fetch();  // Obtiene los datos del usuario como un array asociativo

// Consulta para obtener los temas de interés del usuario
$stmt_temas = $pdo->prepare("SELECT tema FROM temas_interes WHERE usuario_id = ?");
$stmt_temas->execute([$id]);
$temas = $stmt_temas->fetchAll(PDO::FETCH_COLUMN);  // Devuelve un array con los temas

// Consulta para obtener las aficiones del usuario
$stmt_aficiones = $pdo->prepare("SELECT aficion FROM aficiones WHERE usuario_id = ?");
$stmt_aficiones->execute([$id]);
$aficiones = $stmt_aficiones->fetchAll(PDO::FETCH_COLUMN);  // Devuelve un array con las aficiones
?>

<!-- Contenedor principal para mostrar la confirmación -->
<div class="container mt-4">
    <h2 class="text-center mb-4">Confirmación del registro</h2>

    <!-- Tabla para mostrar los datos del usuario -->
    <table class="table table-bordered">
        <tr>
            <th>Nombre</th>
            <td><?= htmlspecialchars($usuario['nombre_completo']) ?></td> 
        </tr>
        <tr>
            <th>Dirección</th>
            <td><?= htmlspecialchars($usuario['direccion']) ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?= htmlspecialchars($usuario['email']) ?></td>
        </tr>
        <tr>
            <th>Fecha de nacimiento</th>
            <td><?= htmlspecialchars($usuario['fecha_nacimiento']) ?></td>
        </tr>
        <tr>
            <th>Sexo</th>
            <td><?= htmlspecialchars($usuario['sexo']) ?></td>
        </tr>
        <tr>
            <th>Temas</th>
            <td><?= implode(', ', $temas) ?></td>  <!-- Muestra los temas como una lista separada por comas -->
        </tr>
        <tr>
            <th>Aficiones</th>
            <td><?= implode(', ', $aficiones) ?></td>  <!-- Muestra las aficiones como una lista separada por comas -->
        </tr>
    </table>
</div>

<?php include("template/footer.php");