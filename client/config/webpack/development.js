const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./environment.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'build/'
  },
  devServer: {
    contentBase: path.join(__dirname, '../../../public/build'),
    hot: true,
    inline: true,
    port: 3010,
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
