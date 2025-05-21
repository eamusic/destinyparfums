const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const title = 'Destiny Perfumería';
    res.render('pages/index', { title });
});

router.get('/shop', (req, res) => {
    const title = 'Destiny Perfumería - Shop';
    res.render('pages/shop', { title });
});

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