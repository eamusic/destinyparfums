const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
// const db = require('../database/models');

router.get('/', indexController.index );

router.get('/shop', indexController.shop);

router.get('/pdctodetail/:id', indexController.pdctoDetail);

router.get('/about', (req, res) =>{
    const title = 'Destiny Perfumería - Quienes Somos';
    res.render('pages/about', { title });
});

router.get('/contact', (req, res) => {
    const title = 'Destiny Perfumería - Contacto';
    res.render('pages/contact', { title });
});

// Ruta para buscar productos por id_marca e id_categoria
router.get('/pdctsfinder', indexController.pdctsFinder);


module.exports = router;