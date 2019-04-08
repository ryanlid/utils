const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const rootPath = path.resolve(__dirname, './')

module.exports = {
  // mode: 'development',
  mode: 'production',
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}
