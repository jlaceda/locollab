import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './components/Navbar/index';
import "./App.css";
import Navbar from "./components/Navbar/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;