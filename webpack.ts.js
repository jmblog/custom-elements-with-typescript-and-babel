const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const distDir = __dirname + '/dist/ts';

module.exports = {
  entry: {
    'app-title': './src/ts/ts-app-title.ts',
    'app-toolbar': './src/ts/ts-app-toolbar.ts',
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
      template: './index-ts.html',
    }),
  ],
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }],
  },
};
