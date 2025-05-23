const express = require('express');
const { Router } = require('express');
const path = require('path');
const session = require('express-session');


const router = Router();

const app = require('express');

router.use(app.json());
router.use(app.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las solicitudes

router.get('/', (req, res) => {
    const title = 'Destiny Perfumeria';
    res.render('pages/index', { title });
});

router.get('/shop', (req, res) => {
    const title = 'Destiny Perfumeria - Shop';
    res.render('pages/shop', { title });
});

router.get('/shop', (req, res) => {
    const title = 'Destiny Perfumeria - Shop';
    res.render('pages/shop', { title });
});

router.get('/about', (req, res) =>{
    const title = 'Destiny Perfumeria - Quienes Somos';
    res.render('pages/about', { title });
});

router.get('/contact', (req, res) => {
    const title = 'Destiny Perfumeria - Contacto';
    res.render('pages/contact', { title });
});

module.exports = router;