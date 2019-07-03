import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './pages/index'
import About from './pages/about'

const Router = (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Router
