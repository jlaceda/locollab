import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Button extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }
  };
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button type="submit" className="btn btn-primary mb-2" onClick={this.setRedirect}>Submit</button>
      </div>
    );
  }
}

export default Button;