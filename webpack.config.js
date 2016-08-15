// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './index.js'],
  output: { path: path.join(__dirname, '/assets/'), publicPath: 'assets', filename: 'bundle_dev.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['airbnb'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      // {test: /\.png$/, loader: 'url-loader?mimetype=image/png'}
      { test: /\.(jpg|png)$/, loader: 'url?limit=25000' },
      // {test: /\.(jpg|png)$/, loader: 'file?name=[path][name].[hash].[ext]'}
    ],
  },
};
