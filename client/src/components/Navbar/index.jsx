import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbarText navbar-brand" to="/">LocalLab</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
              }
            >
              Login
            </Link>
          </li>
          ||
          <li className="nav-item">
            <Link
              to="/newProfile"
              className={
                window.location.pathname === "/"
              }
            >
              Register
            </Link>
          </li>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;