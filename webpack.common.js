const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].build.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Meet',
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
