var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          projectReferences: true
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
