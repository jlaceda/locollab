import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import {UserContext} from "../../user-context";

class Logout extends Component {

     componentWillMount = () => {
          let userContext = this.context;
          userContext.updateUserContext({
               loggedIn: false,
               businessId: '',
               userId: '',
          })
          this.setState({
               redirectTo: "/login?loggedOut=1"
          })
     }

     render() {
          if (this.state.redirectTo) {
               return <Redirect to={{ pathname: this.state.redirectTo }} />
          } else {
               return <div>Logging out</div>
          }
     }
}

Logout.contextType = UserContext;

export default Logout;