 const { merge } = require('webpack-merge');
 const common = require('./webpack.dev.js');

 module.exports = merge(common, {
   mode: 'production',
    devtool: 'source-map',
 });