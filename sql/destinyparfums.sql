-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2025 a las 09:00:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `destinyparfums`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Hombre'),
(2, 'Mujer'),
(3, 'Unisex');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imgs_productos`
--

CREATE TABLE `imgs_productos` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `alt_text` varchar(150) DEFAULT NULL,
  `orden` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imgs_productos`
--

INSERT INTO `imgs_productos` (`id`, `producto_id`, `img_url`, `alt_text`, `orden`) VALUES
(1, 1, 'afnan-9-am-dive-100ml-1.jpeg', 'afnan 9 am dive 100ml 1', 0),
(2, 1, 'afnan-9-am-dive-100ml-2.jpeg', 'afnan 9 am dive 100ml 2', 0),
(3, 2, 'afnan-9-pm-femme-1.jpeg', 'afnan 9 pm femme 1', 0),
(4, 2, 'afnan-9-pm-femme-2.jpeg', 'afnan 9 pm femme 2', 0),
(5, 3, 'afnan-9-am-1.jpeg', 'afnan 9 am 1', 0),
(6, 3, 'afnan-9-am-2.jpeg', 'afnan 9 am 2', 0),
(7, 4, 'afnan-9-pm-hombre-1.jpeg', 'afnan 9 pm hombre 1', 0),
(8, 4, 'afnan-9-pm-hombre-2.jpeg', 'afnan 9 pm hombre 2', 0),
(9, 5, 'AHLI-corvus-60ml-unisex-1.jpg', 'AHLI corvus 60ml unisex 1', 0),
(10, 5, 'AHLI-corvus-60ml-unisex-2.jpg', 'AHLI corvus 60ml unisex 2', 0),
(11, 6, 'Ahli-Lyra-1.jpeg', 'Ahli Lyra 1', 0),
(12, 6, 'Ahli-Lyra-2.jpeg', 'Ahli Lyra 2', 0),
(13, 7, 'lattafa-ajwad-pink-to-pink-60ml-unisex-1.jpeg', 'lattafa ajwad pink to pink 60ml unisex 1', 0),
(14, 7, 'lattafa-ajwad-pink-to-pink-60ml-unisex-2.jpeg', 'lattafa ajwad pink to pink 60ml unisex 2', 0),
(15, 8, 'al-haramain-amber-oud-violet-edition-1.png', 'al haramain amber oud violet edition 1', 0),
(16, 8, 'al-haramain-amber-oud-violet-edition-2.jpeg', 'al haramain amber oud violet edition 2', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `logo_marca` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `nombre`, `logo_marca`) VALUES
(1, 'AFNAN', ''),
(2, 'AHLI', 'ahli.jpeg'),
(3, 'AL HARAMAIN', 'alHaramain.png'),
(4, 'ALEXANDRE J', ''),
(5, 'AMOUAGE', ''),
(6, 'ANTONIO BANDERAS', ''),
(7, 'ARIANA GRANDE', 'arianaGrande.jpeg'),
(8, 'ARMAF', ''),
(9, 'BHARARA', 'bharara.jpeg'),
(10, 'BLACKOUD', ''),
(11, 'BOND', ''),
(12, 'BURBERRY', ''),
(13, 'BVLGARI', 'bvlgary.jpeg'),
(14, 'CALVIN KLEIN', 'calvinKlein.jpeg'),
(15, 'CAPONES', ''),
(16, 'CAROLINA HERRERA', 'carolinaHerrera.jpeg'),
(17, 'CARTIER', ''),
(18, 'CHANEL', ''),
(19, 'CREED', ''),
(20, 'DEVIER', ''),
(21, 'DIESEL', ''),
(22, 'DIOR', ''),
(23, 'DOLCE & GABBANA', ''),
(24, 'DSQUARED2', ''),
(25, 'FERRAGAMO', ''),
(26, 'FUGAZZI', ''),
(27, 'GEVILL FRANCE', ''),
(28, 'GIORGIO ARMANI', ''),
(29, 'GIVENCHY', ''),
(30, 'GUESS', ''),
(31, 'HUGO BOSS', ''),
(32, 'ILMIN', ''),
(33, 'INITIO', ''),
(34, 'ISSEY MIYAKE', ''),
(35, 'JEAN PASCAL', ''),
(36, 'JEAN PAUL GAULTIER', ''),
(37, 'JO MILANO', ''),
(38, 'JUICY COUTURE', ''),
(39, 'LACOSTE', ''),
(40, 'LANCOME', ''),
(41, 'LATTAFA', ''),
(42, 'LE LABO', ''),
(43, 'LOUIS VUITTON', ''),
(44, 'MAISON ALHAMBRA', ''),
(45, 'MAISON FRANCISKURKDJIAN', ''),
(46, 'MANCERA', ''),
(47, 'MARC JACOBS', ''),
(48, 'MONTALE', ''),
(49, 'MONTBLANC', ''),
(50, 'MOSCHINO', ''),
(51, 'MUNDUS', ''),
(52, 'NAUTICA', ''),
(53, 'NISHANE', ''),
(54, 'ORIENTICA', 'orientica.png'),
(55, 'PACO RABANNE', ''),
(56, 'PARFUMS DI MARLY', ''),
(57, 'PERRY ELLIS', ''),
(58, 'PHILIPP PLEIN', ''),
(59, 'PRADA', ''),
(60, 'SWISS ARMY', ''),
(61, 'TIZIANA TERENZI', ''),
(62, 'TOM FORD', ''),
(63, 'TOUS', ''),
(64, 'VALENTINO', ''),
(65, 'VERSACE', ''),
(66, 'VICTOR & ROLF', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `metodo` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `transaccion` varchar(100) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_productos`
--

CREATE TABLE `pedido_productos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `id_categoria` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `marca`, `precio`, `descripcion`, `stock`, `id_categoria`, `id_marca`) VALUES
(1, 'afnan 9 am dive 100ml', '', 280000.00, 'Afnan 9 AM Dive es una fragancia fresca y vigorizante que captura la esencia del océano, fusionando notas marinas con la frescura cítrica de la bergamota y el toque especiado de la pimienta rosa. Ideal para el hombre moderno, esta fragancia te transporta a un mundo de aventura y energía, perfecta para el uso diario y cualquier ocasión.', 0, 3, 1),
(2, 'afnan 9 am pour femme', '', 250000.00, 'Afnan 9 AM Pour Femme es una fragancia que captura la frescura de la mañana. Con notas energizantes de cítricos y grosella negra, se adentra en un corazón floral suave y culmina con una base cálida de almizcle y vainilla, creando una experiencia olfativa única y duradera para la mujer moderna.', 0, 2, 1),
(3, 'afnan 9 pm pour femme', '', 250000.00, 'Afnan 9 PM Pour Femme es una fragancia dulce y sensual que combina notas florales de jazmín, rosa y ylang-ylang con un fondo cálido de vainilla, sándalo y almizcle. Perfecta para cualquier ocasión, su delicadeza y elegancia la convierten en una experiencia única y memorable que destaca la feminidad en todo momento.', 0, 2, 1),
(4, 'afnan 9 pm', '', 30000.00, 'Afnan 9 PM es una fragancia diseñada para la noche, combinando misterio y sofisticación. Su apertura vibrante de notas frescas y especiadas evoluciona hacia un corazón floral y amaderado, que aporta lujo y profundidad. Con una base cálida de ámbar y cuero, ofrece sensualidad duradera, perfecta para dejar una impresión inolvidable en cualquier ocasión especial.', 0, 1, 1),
(5, 'AHLI corvus 60ml unisex', '', 35000.00, 'AHLI CORVUS es más que un perfume, es una experiencia sensorial que te transportará a un universo de elegancia, sofisticación y poder. Un aroma cautivador que refleja tu personalidad única y te convierte en el centro de atención dondequiera que vayas.', 0, 3, 2),
(6, 'Ahli Lyra', '', 35000.00, 'Descubre la encantadora fragancia de Ahli Lyra, una exquisita combinación floral y cítrica que te hará destacar en cualquier ocasión.', 0, 2, 2),
(7, 'al haramain amber oud violet edition', '', 390000.00, 'Al Haramain Amber Oud Ultra Violet es una fragancia lujosa y seductora que combina la calidez del ámbar y la riqueza del oud. Las notas de salida ofrecen una apertura fresca y vibrante con bergamota, frutas rojas y limón, creando una primera impresión energética y alegre. En el corazón, el oud se mezcla con rosa y notas especiadas, aportando un toque floral y exótico que resalta la sofisticación de la fragancia.', 0, 2, 3),
(8, 'lattafa ajwad pink to pink 60ml unisex', '', 260000.00, 'Ajwad Pink To Pink es una fragancia vibrante y encantadora que fusiona la dulzura de la fruta con la elegancia floral. Su apertura es una explosión radiante de toronja rosada, pimienta rosa y lichi, que crean una mezcla fresca y jugosa. En el corazón, el perfume se suaviza con la delicadeza de magnolia, peonía y rosa, mientras que las notas de base de ámbar gris, vainilla, cuero, almizcle y musgo aportan calidez y profundidad.', 0, 3, 41);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL CHECK (`rating` between 1 and 5),
  `comentario` text DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `direccion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imgs_productos`
--
ALTER TABLE `imgs_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pedido_id` (`pedido_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido_productos`
--
ALTER TABLE `pedido_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imgs_productos`
--
ALTER TABLE `imgs_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido_productos`
--
ALTER TABLE `pedido_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
