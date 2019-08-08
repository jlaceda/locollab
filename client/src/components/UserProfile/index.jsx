import React from "react";
import "./style.css";
import photo from "../UserProfile/bgsmall.png";
import Post from '../Post/Post'

class UserProfile extends React.Component {
// Removed useless constructor
  render() {
    return (
      <div className="container">
        <div className="row" id="head">
          <div className="jumbotron">

            <div className="row">
              <div className="col-4">
                <img src={photo} className="mr-3" alt="..."></img>
              </div>
              <div className="col-8">
                <h1 className="display-4">Business Name <a href='/editProfile'> <button id="editBtn" type="button" class="btn btn-secondary btn-sm"><h5>Edit Profile</h5></button></a></h1>
                <h4>Contact Us:</h4>
                <h5>Phone: </h5>
                <h5>Email: </h5>
                <h5>www.examplewebsite.com</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="body">

          <div className="row" id="header">
            <h3>Posts by 'businessname'</h3>
          </div>
          <div className="row" id="content">
            <Post></Post>
              
          </div>
        </div>
      </div>
    )
  }
};

  export default UserProfile;