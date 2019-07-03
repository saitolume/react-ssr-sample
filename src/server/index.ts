import express from 'express'
import render from './render'

const app = express()

// HMR
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../webpack.client.config')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
}

app.use('/public', express.static('dist/client'))
app.get('*', render)

app.listen(3000, () => console.log('Listening on http://localhost:3000'))
