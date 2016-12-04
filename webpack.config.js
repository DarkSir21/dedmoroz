var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var webpack = require('webpack');
var extractor = require("extract-text-webpack-plugin");
var purify = require("purifycss-webpack-plugin");

/*
var NODE_ENV = process.env.NODE_ENV || 'development';
var nameClasses = NODE_ENV == 'production' ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';
*/


module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/',
    //filename: "[chunkhash:6].js"
    filename: 'common.js'
  },

  resolve: {
    extensions: ['', '.js']
  },

  // watch: NODE_ENV == 'development',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      { test: /\.css$/, loader: extractor.extract('style','css') },
      { test: /\.(png|woff(2)?|eot|ttf|svg|jpg|jpeg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100' }
    ]
  },

  plugins: [
        new extractor("common.css"),
        new purify({
            basePath: __dirname,
            paths: [ "index.html" ],
            purifyOptions: {
              minify: true
            }
        }),
        new webpack.EnvironmentPlugin('NODE_ENV'),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
          },
          comments: false,
          sourcemap: false,
          beautify: false,
          dead_code: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        })
    ]
};
