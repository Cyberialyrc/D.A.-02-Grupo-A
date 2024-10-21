<?php
$conn = new mysqli('localhost', 'root', '', 'carga_archivos');
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
$sql = "SELECT * FROM archivos";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>Archivo: " . $row["nombre"] . " - Especialidad: " . $row["especialidad"] . "</p>";
        echo "<a href='" . $row["ruta"] . "'>Ver Archivo</a><br>";
    }
} else {
    echo "No hay archivos cargados.";
}
$conn->close();
?>