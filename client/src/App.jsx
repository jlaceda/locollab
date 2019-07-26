import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BizProfile from './components/BizProfile'
import './components/Navbar/index'
import './App.css'
import Navbar from './components/Navbar/index'
import Main from './components/Main'
import Profile from './components/ProfilePage/profile'
import Cards from './components/Cards/cards'

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile' components={Profile} />
          <Route path='/newProfile' component={BizProfile} />
          <Route path='/' component={Cards} />
        </Switch>
      </Router>
    )
  }
}

export default App
