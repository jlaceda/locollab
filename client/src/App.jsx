import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BizProfile from './components/BizProfile'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile' component={Profile} />
          <Route path='/newProfile' component={BizProfile} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
