import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BizProfile from "./components/BizProfile"
import './components/Navbar/index';
import "./App.css";
import Navbar from "./components/Navbar/index";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
        <Route path='/newProfile' component={BizProfile}/>
        <Route path='/main' component={Main}/>
      </Switch>
      </Router>
    );
  }
}

export default App;