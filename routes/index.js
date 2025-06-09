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

// Ruta para eliminar un producto del carrito
/*router.get('/remove-from-cart/:id', (req, res) => {
    const productoId = req.params.id;

    if (!req.session.cart || req.session.cart.length === 0) {
        return res.status(404).json({ error: "El carrito está vacío o no existe" });
    }

    const index = req.session.cart.findIndex(item => item.id === productoId);
    if (index > -1) {
        req.session.cart.splice(index, 1);
        return res.status(200).json({ 
            message: "Producto eliminado del carrito", 
            cart: req.session.cart 
        });
    } else {
        return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }
});*/



module.exports = router;