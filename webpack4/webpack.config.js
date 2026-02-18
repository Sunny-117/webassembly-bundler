const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rust WASM + Webpack 4',
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'javascript/auto',
        loaders: ['wasm-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.wasm']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  mode: 'development',
};
