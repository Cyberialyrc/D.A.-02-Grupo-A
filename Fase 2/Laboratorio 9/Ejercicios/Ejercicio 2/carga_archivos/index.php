<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Carga de Archivos</title>
</head>
<body>
    <h1>Cargar Archivo</h1>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="especialidad">Especialidad:</label>
        <select name="especialidad" id="especialidad" required>
            <option value="Estadistica">Estadistica</option>
            <option value="DesarrolloWeb">Desarrollo Web</option>
            <option value="Testing">Testing</option>
        </select>
        <br>
        <label for="archivo">Seleccionar Archivo:</label>
        <input type="file" name="archivo" id="archivo" required>
        <br>
        <input type="submit" value="Subir Archivo">
    </form>
    <h2>Archivos Cargados</h2>
    <a href="ver_archivos.php">Ver Archivos</a>
</body>
</html>