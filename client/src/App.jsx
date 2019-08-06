import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddProfile from './components/AddProfile'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import EditProfile from './components/EditProfile'
import BusinessProfile from './components/BusinessProfile';

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/editProfile' component={EditProfile} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/profile/:id' component={BusinessProfile} />
          <Route path='/newProfile' component={AddProfile} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
