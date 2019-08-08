import React from "react";
import "./style.css";
import photo from "../UserProfile/bgsmall.png";
import Post from '../Post/Post'
import {UserContext} from "../../user-context";
import API from "../../utils/API";
import { Redirect, Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      profile : {}
    }
  }
  // componentWillMount = () => {
  //   let userContext = this.context;
  //   console.log(userContext);
  //   if (userContext.loggedIn) {
  //     API.specificProfile(userContext.businessId).then(response => {
  //       this.setState({
  //         profile: response.data.profile
  //       })
  //     });
  //   } else {
  //     this.setState({
  //       redirectTo: "/login?noProfile=1"
  //     })
  //   }
  // }
  componentDidMount = () => {
    let userContext = this.context;
    console.log(userContext);
    if (userContext.loggedIn) {
      API.specificProfile(userContext.businessId).then(response => {
        this.setState({
          profile: response.data.profile
        })
      });
    } else {
      this.setState({
        redirectTo: "/login?noProfile=1"
      })
    }
  }
  render() {
    console.log(this.state);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="container">
          <div className="row" id="head">
          <div className="jumbotron">

            <div className="row">
              <div className="col-4">
                <img src={photo} className="mr-3" alt="..."></img>
              </div>
              <div className="col-8">
                <h1 className="display-4">{this.state.profile.bname}<Link to='/editProfile'>
                    <button id="editBtn" type="button" className="btn btn-secondary btn-sm">
                      <h5>Edit Profile</h5>
                      </button></Link></h1>
                <h4>Contact Us: </h4>
                <h5>Owner: {this.state.profile.name} </h5>
                <h5>Phone: {this.state.profile.phone} </h5>
                <h5>Email: {this.state.profile.bemail} </h5>
                <h5>{this.state.profile.website}</h5>
              </div>
            </div>
          </div>
        </div>

          <div className="row" id="body">

            <div className="row" id="header">
              <h3>Posts by '{this.state.profile.bname}'</h3>
            </div>
            <div className="row" id="content">
              <Post></Post>
                
            </div>
          </div>
        </div>
      )
    }
  }
};

UserProfile.contextType = UserContext;

export default UserProfile;