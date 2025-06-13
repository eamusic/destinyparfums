const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const {cartHasProducts} = require('../controllers/index')
// const db = require('../database/models');

router.get('/', indexController.index );

router.get('/shop', indexController.shop);

router.get('/pdctodetail/:id', indexController.pdctoDetail);

router.get('/about', indexController.about);

router.get('/contact', indexController.contact);

// Ruta para buscar productos por id_marca e id_categoria
router.get('/pdctsfinder', indexController.pdctsFinder);

// Ruta para agregar un producto al carrito
router.all('/add-to-cart/:id', indexController.addToCart);

// Ruta para eliminar un producto del carrito
router.all('/remove-from-cart/:id', indexController.removeFromCart);

// Ruta para consultar si el carrito está vacío
// router.get('/cart-has-products' , indexController.carritoTienePdctos);



module.exports = router;