const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/', indexController.index );

router.get('/shop', indexController.shop);

router.get('/pdctodetail', (req, res) => {
    const title = 'Destiny Perfumería - Detalles Perfume';
    res.render('pages/pdctoDetail', { title });
});

router.get('/about', (req, res) =>{
    const title = 'Destiny Perfumería - Quienes Somos';
    res.render('pages/about', { title });
});

router.get('/contact', (req, res) => {
    const title = 'Destiny Perfumería - Contacto';
    res.render('pages/contact', { title });
});

module.exports = router;