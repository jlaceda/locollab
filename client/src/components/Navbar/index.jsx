import React from "react";
import {Link} from 'react-router-dom';
import './style.css';
import LoginMenu from "../LoginMenu";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbarText navbar-brand" to="/">LoCollab</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <LoginMenu />
      </nav>
    );
  }
}

export default Navbar;