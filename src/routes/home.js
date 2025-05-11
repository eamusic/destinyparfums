const express = require('express');
const { Router } = require('express');
const path = require('path');
const session = require('express-session');


const router = Router();

const app = require('express');

router.use(app.json());
router.use(app.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las solicitudes
<<<<<<< HEAD
=======
router.use(app.static(path.join(__dirname, 'public'))); // Middleware para servir archivos estáticos
// milddware para servir archivos estáticos de la carpeta views
router.use(app.static(path.join(__dirname, 'views'))); // Middleware para servir archivos estáticos
// router.use(app.static(path.join(__dirname, 'views'))); // Middleware para servir archivos estáticos
>>>>>>> 7cc544b7a77c666ea23ae3ea8acd64c84e775168

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

module.exports = router;