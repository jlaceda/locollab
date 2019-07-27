import React from "react";
import "./style.css";
import photo from "../ProfilePage/bgsmall.png"


function Profile() {
return(
<div clasName="container">
<div className="row" id="head">
<div className="jumbotron">
  <div className="row">
  <div className="col">
  <img src={photo} className="mr-3" alt="..."></img>
  </div>
  <div className="col">
  <h1 className="display-4">Business Name</h1>
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
  <div class="card">
    <div class="card-body">
      
      <p class="card-title">Free Samples
      <span class="date">6/17/19 2:30pm Seattle, WA</span>
      </p>
      
      <p class="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
      <a href="#" class="btn btn-primary">More Info</a>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      
      <p class="card-title">Free Samples
      <span class="date">6/17/19 2:30pm Seattle, WA</span>
      </p>
      
      <p class="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
      <a href="#" class="btn btn-primary">More Info</a>
    </div>
  </div>
</div>
</div>
</div>
)
}

export default Profile;