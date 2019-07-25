import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BizProfile from "./components/BizProfile";
import './components/Navbar/index';
import "./App.css";
import Navbar from "./components/Navbar/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
        <Route path='/newProfile' component={BizProfile} />
      </Switch>
      </Router>
    );
  }
}

export default App;