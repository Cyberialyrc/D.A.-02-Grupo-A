<!-----------------------------------------------------------------------------------
ARCHIVO: index.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Archivo que se encarga de mostrar el formulario.
------------------------------------------------------------------------------------>
<?php 
include("template/header.php"); 
include("db.php"); // Conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Encriptar la contraseña
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $sexo = $_POST['sexo'];
    $temas = $_POST['temas'] ?? [];
    $aficiones = $_POST['aficiones'] ?? [];

    try {
        // Insertar usuario en la tabla 'usuarios'
        $stmt = $pdo->prepare("INSERT INTO usuarios (nombre_completo, direccion, email, password, fecha_nacimiento, sexo) 
                               VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$nombre, $direccion, $email, $password, $fecha_nacimiento, $sexo]);
        $usuario_id = $pdo->lastInsertId(); // Obtener el ID del usuario insertado

        // Insertar temas de interés en la tabla 'temas_interes'
        $stmt_temas = $pdo->prepare("INSERT INTO temas_interes (usuario_id, tema) VALUES (?, ?)");
        foreach ($temas as $tema) {
            $stmt_temas->execute([$usuario_id, $tema]);
        }

        // Insertar aficiones en la tabla 'aficiones'
        $stmt_aficiones = $pdo->prepare("INSERT INTO aficiones (usuario_id, aficion) VALUES (?, ?)");
        foreach ($aficiones as $aficion) {
            $stmt_aficiones->execute([$usuario_id, $aficion]);
        }

        header("Location: confirmacion.php?id=$usuario_id"); // Redirigir a la página de confirmación
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>

<div class="container mt-4">
    <h2 class="text-center mb-4">Formulario de inscripción de usuarios</h2>
    <form action="index.php" method="POST">
        <div class="form-group">
            <label>Nombre completo</label>
            <input type="text" name="nombre" class="form-control" required>
        </div>

        <div class="form-group">
            <label>Dirección</label>
            <textarea name="direccion" class="form-control" rows="3" required></textarea>
        </div>

        <div class="form-group">
            <label>Correo electrónico</label>
            <input type="email" name="email" class="form-control" required>
        </div>

        <div class="form-group">
            <label>Contraseña</label>
            <input type="password" name="password" class="form-control" required>
        </div>

        <div class="form-group">
            <label>Fecha de nacimiento</label>
            <input type="date" name="fecha_nacimiento" class="form-control" required>
        </div>

        <div class="form-group">
            <label>Sexo</label><br>
            <input type="radio" name="sexo" value="Hombre" required> Hombre
            <input type="radio" name="sexo" value="Mujer" required> Mujer
        </div>

        <div class="form-group">
            <label>Temas de interés</label><br>
            <input type="checkbox" name="temas[]" value="ficcion"> Ficción
            <input type="checkbox" name="temas[]" value="accion"> Acción
            <input type="checkbox" name="temas[]" value="suspenso"> Suspenso
            <input type="checkbox" name="temas[]" value="terror"> Terror
            <input type="checkbox" name="temas[]" value="comedia"> Comedia
        </div>

        <div class="form-group">
            <label>Aficiones</label>
            <select name="aficiones[]" class="form-control" multiple>
                <option value="Deporte-aire-libre">Deporte al aire libre</option>
                <option value="Musica-Pop">Música Pop</option>
                <option value="Fotografia">Fotografía</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Enviar</button>
    </form>
</div>

<?php include("template/footer.php"); ?>