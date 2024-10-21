<?php
$especialidad = $_POST['especialidad'];
$targetDir = "uploads/$especialidad/";
$targetFile = $targetDir . basename($_FILES["archivo"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Verificar si el directorio existe, si no, crearlo
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

// Comprobar si el archivo ya existe
if (file_exists($targetFile)) {
    echo "Lo siento, el archivo ya existe.";
    $uploadOk = 0;
}

// Comprobar el tamaño del archivo
if ($_FILES["archivo"]["size"] > 5000000) { // 5MB
    echo "Lo siento, el archivo es demasiado grande.";
    $uploadOk = 0;
}

// Permitir ciertos formatos de archivo
if($fileType != "jpg" && $fileType != "png" && $fileType != "pdf" && $fileType != "doc" && $fileType != "docx") {
    echo "Lo siento, solo se permiten archivos JPG, PNG, PDF, DOC, DOCX.";
    $uploadOk = 0;
}

// Verificar si $uploadOk es 0 por un error
if ($uploadOk == 0) {
    echo "Lo siento, tu archivo no fue subido.";
} else {
    if (move_uploaded_file($_FILES["archivo"]["tmp_name"], $targetFile)) {
        // Conexión a la base de datos
        $conn = new mysqli('localhost', 'root', '', 'carga_archivos');
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }
        // Insertar en la base de datos
        $sql = "INSERT INTO archivos (nombre, especialidad, ruta) VALUES ('" . basename($_FILES[" archivo"]["name"]) . "', '$especialidad', '$targetFile')";
        if ($conn->query($sql) === TRUE) {
            echo "Archivo subido correctamente.";
        } else {
            echo "Error al subir archivo: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    } else {
        echo "Lo siento, hubo un error al subir tu archivo.";
    }
}
?>