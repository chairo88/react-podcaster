const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack'.Configuration)} */
const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  }
};

module.exports = merge(common, prodConfig);