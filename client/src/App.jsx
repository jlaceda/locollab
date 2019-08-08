import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddProfile from './components/AddProfile'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import EditProfile from './components/EditProfile'
import BusinessProfile from './components/BusinessProfile';
import Login from './components/Login'
import Logout from './components/Logout'
import { UserContext } from "./user-context"

class App extends Component {

  constructor(props) {
    super(props)

    this.updateUserContext = (state) => {
      console.log(state)
      this.setState({
        loggedIn: state.loggedIn,
        businessId: state.businessId,
        userId: state.userId,
      });
    };

    this.state = {
      loggedIn: false,
      updateUserContext: this.updateUserContext,
    };

  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/editProfile' component={EditProfile} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/profile/:id' component={BusinessProfile} />
          <Route path='/newProfile' component={AddProfile} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
      </UserContext.Provider>
    )
  }
}

export default App
