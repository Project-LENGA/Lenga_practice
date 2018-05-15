const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../../../');
const srcDir = path.join(root, 'client/src');
const buildDir = path.join(root, 'public/build');

console.log(path.join(srcDir, 'index.js'));

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.join(srcDir, 'index.js')
    ],
  },
  output: {
    path: buildDir,
    filename: 'bundle.[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'templates/index.html')
    }),
  ],
};
