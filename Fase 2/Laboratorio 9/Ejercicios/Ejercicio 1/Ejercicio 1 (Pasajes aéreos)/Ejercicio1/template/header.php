<!-----------------------------------------------------------------------------------
ARCHIVO: header.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Arhivo que contiene el encabezado de todas las páginas, sea este el navbar.
------------------------------------------------------------------------------------>
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta http-equiv= "X-UA"-Compatible" content = "IE=edge">
        <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
        <title>Pasajes aéreos</title>
        <!-- Título de la página -->
        <link rel="stylesheet" href="/Ejercicio1/css/bootstrap.min.css">
        <!-- Estilos de Bootstrap -->
        <link rel="stylesheet" href="/Ejercicio1/css/header.css">
        <!-- Estilos personalizados para el encabezado -->
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- Barra de navegación con fondo oscuro -->
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/Ejercicio1/index.php">
                        <img src="/Ejercicio1/img/logo.png" alt="Icon" class="logo-img">
                        <!-- Logo de la página -->
                        <span class="fs-4">Pasajes</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/Ejercicio1/index.php">Inicio</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/Ejercicio1/venta.php">Comprar</a>
                </li>
            </ul>
        </nav>
    </body>
</html>
<div class="container">
    <div class="row">
        <!-- Contenedor principal para el contenido con un sistema de filas -->