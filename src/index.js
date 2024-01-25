import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Temp from './views/temp'
import Home from './views/home'
import Home20230123 from './views/home-20230123'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Temp} exact path="/temp" />
        <Route component={Home} exact path="/" />
        <Route component={Home20230123} exact path="/home-20230123" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
