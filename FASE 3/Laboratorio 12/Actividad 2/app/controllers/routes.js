// Importando paquetes y archivos necesarios para trabajar las rutas
var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

// Configurando el Parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(function (req, res, next) {
    console.log("request");
    next();
});

// Métodos para manejar Base de Datos mongoDB llamada node-crud
router.route('/products')
    .post(async function (req, res) {
        try {
            // Creando un nuevo producto
            var product = new Product();
            product.name = req.body.name;
            product.amount = req.body.amount;
            product.description = req.body.description;

            // Guardando el producto usando Promesas
            await product.save();  // Ahora se usa `await` en vez de callback

            res.json({ message: "Producto registrado con éxito" });
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error.message);
        }
    })
    .get(async function (req, res) {
        try {
            // Obteniendo todos los productos
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error.message);
        }
    });

module.exports = router;
