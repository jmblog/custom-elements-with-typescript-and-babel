const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const distDir = __dirname + '/dist/es6';

module.exports = {
  entry: {
    'app-title': './src/es6/es6-app-title.js',
    'app-toolbar': './src/es6/es6-app-toolbar.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: distDir,
  },
  devServer: {
    contentBase: distDir,
  },
  plugins: [
    new CleanWebpackPlugin([distDir]),
    new HtmlWebpackPlugin({
      inject: false,
      template: './index-es6.html',
    }),
  ],
};
