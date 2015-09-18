var webpack = require('webpack');
var htmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var config = require('./config');

module.exports = function(options) {

  var base = {
    name: 'app',
    entry: './' + config.paths.source + '/Main.jsx',
    output: {
      path: path.resolve(__dirname, config.paths.deploy),
      filename: '[name].js'
    },
    resolve: {
      root: path.resolve(__dirname, config.paths.source),
      extensions: ['', '.js', '.jsx', '.scss', '.html'],
      modulesDirectories: ['node_modules', 'public', 'src']
    },
    module: {
      preLoaders: [
        {
          test: /\.js|jsx$/,
          include: path.resolve(__dirname, config.paths.source),
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'url-loader?limit=8192&name=[path][name]--[hash:6].[ext]'
        },
        {
          test: /\.(eot|ttf|woff)$/,
          loader: 'url-loader?limit=10000&name=[path][name]--[hash:6].[ext]'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?module&localIdentName=[local]!autoprefixer-loader!sass-loader?outputStyle=compressed'
        }
      ]
    },
    plugins: [
      new htmlwebpackPlugin({
        title: config.app.title,
        template: path.resolve(__dirname, config.paths.source, 'index.html'),
        inject: 'body'
      })
    ]
  };

  return merge(base, options);

};
