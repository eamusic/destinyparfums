const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'destinyparfums'
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('appName', 'Destiny Perfumeria');
app.set('port', 3000);

// Middlewares
app.use((req, res, next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(express.json());
app.use(express.urlencoded({extend: true}));

// Configuración de sesión
app.use(session({
  secret: 'destiny_perfumeria', // Debe ser una cadena secreta única
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // En producción, si usas HTTPS, cambia a true
}));


// Consulta a la tabla marcas para tomarlo desde partials/sliderMarcas
// app.get('/pdctsfinder', (req, res) => {
//     connection.query("SELECT * FROM marcas", (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send({ marcas: result });
//             return;
//         }
//     });
// });


// Rutas
app.use(routes);

// Statics files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} is running on port ${app.get('port')}`);
});