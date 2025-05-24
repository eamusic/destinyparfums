const mysql = require('mysql');
const { body, validationResult } = require('express-validator');


// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'destinyparfums'
});

const index =  (req, res) => {
    connection.query(
        `SELECT productos.*, imgs_productos.img_url 
         FROM productos 
         LEFT JOIN imgs_productos ON productos.id = imgs_productos.producto_id`,
        (error, results) => {
            if (error) {
                return res.status(500).send('Error en la base de datos');
            }
            const title = 'Destiny Perfumería';
            res.render('pages/index', { title, productos: results });
        }
    );
    return;
}

const shop = (req, res) => {
    connection.query(
        `SELECT productos.*, categorias.nombre AS categoria, marcas.nombre AS marca, imgs_productos.img_url
         FROM productos
         LEFT JOIN categorias ON productos.id_categoria = categorias.id
         LEFT JOIN marcas ON productos.id_marca = marcas.id
         LEFT JOIN imgs_productos ON productos.id = imgs_productos.producto_id`,
        (error, results) => {
            if (error) {
                return res.status(500).send('Error en la base de datos');
            }
            const title = 'Tienda - Destiny Perfumería';
            res.render('pages/shop', { title, productos: results });
        }
    );
}

module.exports = {
    index,
    shop
}