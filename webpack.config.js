'use strict'

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
