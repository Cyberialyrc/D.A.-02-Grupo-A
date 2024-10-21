<!-----------------------------------------------------------------------------------
ARCHIVO: venta.php
AUTOR: Manrique Silva Ricardo Gabriel
FECHA: 21/10/24
DESCRIPCIÓN: Arhivo que controla el formulario de calculo de precio respecto a la fecha de nacimiento y la lógica del mismo.
------------------------------------------------------------------------------------>
<?php include("template/header.php"); ?>

<div class="container mt-4">
    <!-- Formulario -->
    <h2 class="text-center mb-4">Compra de Pasajes</h2>
    <form method="POST" action="venta.php">
        <div class="form-group">
            <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="date" name="fecha_nacimiento" class="form-control" required>
        </div>

        <!-- Opciones de destino -->
        <div class="form-group">
            <label for="destino">Destino:</label>
            <select name="destino" class="form-control" required>
                <option value="Cancún|300">Cancún - $300</option>
                <option value="Nueva York|450">Nueva York - $450</option>
                <option value="París|500">París - $500</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Calcular Precio</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        list($destino, $precio) = explode('|', $_POST['destino']);

        // Calcular la edad a partir de la fecha de nacimiento
        $edad = date_diff(date_create($fecha_nacimiento), date_create('today'))->y;

        // Determinar el precio final según la edad
        if ($edad < 2) {
            $precio_final = 0;
            $mensaje = "El pasaje es gratuito para infantes.";
        } elseif ($edad <= 17) {
            $precio_final = $precio * 0.75;
            $mensaje = "El pasaje tiene un descuento del 25%.";
        } else {
            $precio_final = $precio;
            $mensaje = "Precio completo sin descuentos.";
        }

        // Mostrar el resultado
        echo "<div class='alert alert-info mt-4'>".
                "Tu destino es <strong>$destino</strong>. ".
                "$mensaje El precio final es: $".$precio_final.
             "</div>";
    }
    ?>
</div>

<?php include("template/footer.php"); ?>