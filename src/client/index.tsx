import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

renderMethod(<BrowserRouter>{Router}</BrowserRouter>, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
