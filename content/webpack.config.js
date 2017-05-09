const path = require('path');
const webpack = require('webpack');

const dir_views = path.resolve(__dirname, 'views');
const dir_public = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'source-map',

  devServer: {
    contentBase: [ dir_views, dir_public],
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  entry: [
      'webpack/hot/only-dev-server',
      __dirname + '/app/main.jsx',
  ],

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /public/
        ],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc.js',
          failOnError: true,
          failOnWarning: false,
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        },
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: dir_public,
    publicPath: 'http://localhost:8080/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    enforceExtension: false,
  },

  stats: {
    colors: true,
  },

  watch: true,
};