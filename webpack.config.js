const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: '../src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

 devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(), // new line
    new HtmlWebpackPlugin({
      title: '',
      template: 'index.html',
      inject: 'body'
    })
  ],

 new Dotenv()
  ],
  
 
  module: {
    rules: [
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};