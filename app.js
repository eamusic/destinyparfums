const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('appName', 'Destiny Perfumeria');
app.set('port', 3000);

// Middlewares
app.use((req, res, next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

// Rutas
app.use(routes);

// Statics files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} is running on port ${app.get('port')}`);
});