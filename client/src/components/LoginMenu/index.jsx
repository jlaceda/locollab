import React from "react";
import {Link} from 'react-router-dom';
import './style.css';
import {UserContext} from "../../user-context";

class LoginMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<UserContext.Consumer>
      {({loggedIn}) => (
        loggedIn 
        ?<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <li className="nav-item">
          <Link to="/logout">Logout</Link>
        </li>
        </div>
        </div>
        :<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              // className={
              //   window.location.pathname || "/"
              // }
            >
              Login
            </Link>
          </li>
        </div>
        </div>
      )}
    </UserContext.Consumer>)
  }
}

export default LoginMenu;