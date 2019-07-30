import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BizProfile from './components/BizProfile'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/home'
import Profile from './components/Profile'
import Login from './components/Login'

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/newProfile' component={BizProfile} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
