'use strict'

const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    resolve('src', 'client', 'index.tsx'),
    'webpack-hot-middleware/client'
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
