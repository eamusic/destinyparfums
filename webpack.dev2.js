const { merge } = require('webpack-merge');
 const common = require('./webpack.dev.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dev-build',
     port: 8080,
   },
 });