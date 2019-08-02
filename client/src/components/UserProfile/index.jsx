import React from "react";
import "./style.css";
import photo from "../UserProfile/bgsmall.png"


function UserProfile() {
return(
<div clasName="container">
<div className="row" id="head">
<div className="jumbotron">
  <div className="row">
  <div className="col-4">
  <img src={photo} className="mr-3" alt="..."></img>
  </div>
  <div className="col-8">
  <h1 className="display-4">Business Name<button id="editBtn" type="button">Edit Profile</button></h1>
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
  <div className="card">
    <div className="card-body">
      
      <p className="card-title">Free Samples
      <span className="date">6/17/19 2:30pm Seattle, WA</span>
      </p>
      
      <p className="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
      <button className="btn btn-primary">More Info</button>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      
      <p className="card-title">Free Samples
      <span className="date">6/17/19 2:30pm Seattle, WA</span>
      </p>
      
      <p className="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
      <button className="btn btn-primary">More Info</button>
    </div>
  </div>
</div>
</div>
</div>
)
}

export default UserProfile;