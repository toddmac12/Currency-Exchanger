const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const Dotenv = require('dotenv-webpack');
module.exports = {
 entry: './src/main.js',
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
 },
 plugins: [
  new Dotenv(),
  new CleanWebpackPlugin(), // new line
  new HtmlWebpackPlugin({
   title: '',
   template: 'index.html',
   inject: 'body',
  })
 ],

 module: {
  rules: [
   {
    test: /\.css$/,
    use: [
     'style-loader',
     'css-loader'
    ]
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
   }
  ]
 }
};
