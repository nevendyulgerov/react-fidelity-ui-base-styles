// prod config
const webpack = require('webpack');
const devConfig = require('./webpack-dev.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prodConfig = Object.assign({}, devConfig);

prodConfig.mode = 'production';

prodConfig.module.rules = [
  {
    test: /\.(css|sass|scss)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader'
      }]
    })
  }
];

prodConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ExtractTextPlugin({
    filename: './style.min.css',
    allChunks: true
  }),
];

module.exports = prodConfig;
