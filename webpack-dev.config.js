const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/css/main.css'
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin(),
    new ExtractTextPlugin({
      filename: './style.css',
      allChunks: true
    })
  ]
};
