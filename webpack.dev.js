 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     main: './src/index.js',
   },
   output: {
     filename: '[name].js',
     publicPath: '/',
     path: path.resolve(__dirname, 'dev-build'),
     clean: true,
   },
   mode: 'development',
  //  target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.ejs$/i,
          use: ['html-loader', 'template-ejs-loader'],
         },
      ],
    },
    resolve: {
      extensions: ['.js', '.ejs'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/views/index.ejs',
        templateParameters: {
          basePath: './src/views/public',
        },
        filename: 'index.html',
      }),
    ],
 };