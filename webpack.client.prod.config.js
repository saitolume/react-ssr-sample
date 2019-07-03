'use strict'

const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: resolve('src', 'client', 'index.tsx'),
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
