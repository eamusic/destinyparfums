const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js', // Punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Archivo de salida
  },
  target: 'node',
  externals: [nodeExternals()], // Para evitar empaquetar dependencias de node_modules
  mode: 'production', // Modo de producción
};
