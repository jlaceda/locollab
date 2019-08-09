import React from "react";
import {Link} from 'react-router-dom';
import './style.css';
import {UserContext} from "../../user-context";

class LoginMenu extends React.Component {
  // Commenting out useless constructor.
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (<UserContext.Consumer>
      {({loggedIn}) => (
        loggedIn 
        ?<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <li className="nav-item">
          <Link to="/userProfile">Business</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout">Logout</Link>
        </li>
        </div>
        </div>
        :<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" >Login</Link>
          </li>
            <li className="nav-item">
            <Link to="/newProfile">Register</Link>
          </li>
        </div>
        </div>
      )}
    </UserContext.Consumer>)
  }
}

export default LoginMenu;