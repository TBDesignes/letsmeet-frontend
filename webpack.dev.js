const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    static: './static',
    historyApiFallback: true,
  },
});
