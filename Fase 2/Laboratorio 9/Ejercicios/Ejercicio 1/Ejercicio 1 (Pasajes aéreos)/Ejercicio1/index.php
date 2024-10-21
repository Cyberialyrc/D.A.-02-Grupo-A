<!-----------------------------------------------------------------------------------
ARCHIVO: index.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Archivo que se encarga de mostrar la página principal / de inicio.
------------------------------------------------------------------------------------>
<?php include("template/header.php"); ?> <!-- Plantilla del header -->
<div class="container mt-4">
    <h2 class = "text-center mb-4"> Promociones </h2>
    <link rel = "stylesheet" href = "/Ejercicio1/css/index.css"> <!-- CSS para index (estilos solo para este) -->

    <div id = "promotionsCarousel" class = "carousel slide" data-ride = "carousel">
        <div class = "carousel-inner">

            <div class = "carousel-item active"> <!-- Carrusel activo (1) -->
                <div class = "jumbotron">
                    <h3 class = "display-4">¡Vuelos a Cancún!</h3>
                    <p class = "lead">Desde solo $300 USD.</p>
                    <hr class = "my-2">
                    <p>Disfruta de descuentos por temporada baja.</p>
                </div>
            </div>

            <div class = "carousel-item"> <!-- Carrusel (2) -->
                <div class = "jumbotron">
                    <h3 class = "display-4">Ofertas a Nueva York</h3>
                    <p class = "lead">Desde $450 USD ida y vuelta.</p>
                    <hr class = "my-2">
                    <p>Aprovecha esta oferta válida hasta el 30 de noviembre.</p>
                </div>
            </div>

            <div class = "carousel-item"> <!-- Carrusel (3) -->
                <div class = "jumbotron">
                    <h3 class = "display-4">Promoción a París</h3>
                    <p class = "lead">Descuento del 10% con tarjeta de crédito.</p>
                    <hr class = "my-2">
                    <p>Válido solo para adultos.</p>
                </div>
            </div>
        </div>
        
        <ol class = "carousel-indicators"> <!-- Identificador de cada item del carrusel -->
            <li data-target = "#promotionsCarousel" data-slide-to="0" class = "active"></li>
            <li data-target = "#promotionsCarousel" data-slide-to="1"></li>
            <li data-target = "#promotionsCarousel" data-slide-to="2"></li>
        </ol>
    </div>
</div>
<?php include ("template/footer.php"); ?> <!-- Plantilla del footer -->

<script src = "https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<script> // Script que establece el tiempo que está en pantalla cada item del carrusel
    $(document).ready(function() {
        $('promotionsCarousel').carousel({
            interval: 5000 //ms
        });
    });
</script>