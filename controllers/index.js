const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const nodemon = require('nodemon');


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
            // Formatear precios sin decimales
            results.forEach(producto => {
                if (producto.precio !== undefined && producto.precio !== null) {
                    producto.precio = Number(producto.precio).toLocaleString('es', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 });
                }
            });
            
            
            
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
            console.log(results[0].marca);
        // Consultar la tabla marcas
    connection.query("SELECT * FROM marcas", (err, marcas) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Verificar que cada marca tenga logo_marca; si es nulo o vacío, asignar default
        marcas.forEach(marca => {
            if (!marca.logo_marca) {
                marca.logo_marca = "https://placehold.co/200";
            } else {
                marca.logo_marca = "/public/images/marcas/" + marca.logo_marca;
            }
        })
            const title = 'Tienda - Destiny Perfumería';
            res.render('pages/shop', { title, productos: results, marcas });
        })
});
}

const pdctoDetail = (req, res) => {
    const productoId = req.params.id;
    connection.query(
        `SELECT productos.*, imgs_productos.img_url, marcas.nombre AS marca, categorias.nombre AS categoria
         FROM productos
         LEFT JOIN imgs_productos ON productos.id = imgs_productos.producto_id
         LEFT JOIN marcas ON productos.id_marca = marcas.id
         LEFT JOIN categorias ON productos.id_categoria = categorias.id
         WHERE productos.id = ?`,
        [productoId],
        (error, results) => {
            if (error) {
                return res.status(500).send('Error en la base de datos');
            }
            const referedPdcto = results[0].id;
            results[0].imagenes = [];
            results.forEach(row => {
                if (row.img_url) {
                    results[0].imagenes.push(row.img_url);
                }
            });
            connection.query(
                `SELECT productos.*, imgs_productos.img_url, imgs_productos.alt_text
                 FROM productos
                 LEFT JOIN imgs_productos ON productos.id = imgs_productos.producto_id
                 WHERE productos.id_categoria = ? OR productos.id_marca = ? AND productos.id != ?
                 GROUP BY productos.id LIMIT 4`,
                [results[0].id_categoria, results[0].id_marca, referedPdcto],
                (err, relatedResults) => {
                    if (err) {
                        return res.status(500).send('Error en la base de datos');
                    }
                    // Filtrar productos relacionados para evitar duplicados
                    relatedResults = relatedResults.filter((related) => related.id !== referedPdcto);
                    const relatedpdcts = relatedResults || [];
                    // results[0].relatedpdcts = relatedpdcts;
                    console.log('relatedpdcts', relatedpdcts);
                    
                    const title = 'Destiny Perfumería - Detalles Perfume';
                    res.render('pages/pdctoDetail', { title, producto: results[0], imagenes: results[0].imagenes, relatedpdcts});
                }
            );
        }
    );
    return;
};

const pdctsFinder = (req, res) => {
    const { id_marca, id_categoria } = req.query;

    // Validar que se proporcionen al menos uno de los parámetros
    if (!id_marca && !id_categoria) {
        return res.status(400).json({ error: "Se requiere al menos un id_marca o id_categoria para la búsqueda" });
    }

    // Consultar la tabla marcas
    connection.query("SELECT * FROM marcas", (err, marcas) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Verificar que cada marca tenga logo_marca; si es nulo o vacío, asignar default
        marcas.forEach(marca => {
            if (!marca.logo_marca) {
                marca.logo_marca = "https://placehold.co/200";
            } else {
                marca.logo_marca = "/public/images/marcas/" + marca.logo_marca;
            }
        })

        // Construir la consulta dinámica para productos e imágenes
        let query = `
            SELECT productos.*, imgs_productos.img_url, imgs_productos.alt_text 
            FROM productos 
            LEFT JOIN imgs_productos ON productos.id = imgs_productos.producto_id 
            WHERE 1=1
        `;
        let params = [];

        if (id_marca) {
            query += " AND id_marca = ?";
            params.push(id_marca);
        }

        if (id_categoria) {
            query += " AND id_categoria = ?";
            params.push(id_categoria);
        }

        // Ejecutar la consulta para productos
        connection.query(query, params, (error, results) => {
            if (error) {
                console.error("Error al buscar productos:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }

            // Formatear precios sin decimales
            results.forEach(producto => {
                if (producto.precio !== undefined && producto.precio !== null) {
                    producto.precio = Number(producto.precio).toLocaleString('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    });
                }
            });

            const title = 'Buscar Productos - Destiny Perfumería';
            res.render('pages/pdctsSearch', { title, productos: results, marcas });
        });
    });
};

module.exports = {
    index,
    shop,
    pdctoDetail,
    pdctsFinder
}