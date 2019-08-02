import React from "react";
import "./style.css";
import photo from "../Profile/bgsmall.png"


function EditProfile() {
return(
<div clasName="container">
<div className="row" id="head">

<div className="jumbotron">
   
  <div className="row">
  <div className="col-4">
  <div id="filesubmit">
            <input type="file" id="photo" class="file-select" accept="image/*" onchange="readURL(this);"></input>
            <img id="pic" src={photo}></img>
</div>  

  </div>
  <div className="col-8">
  <a href='/userProfile'><button>Done editing</button></a>
  <h1 className="display-4" contenteditable="true" id="name">Business Name</h1>
  <h4>Contact Us:</h4>
  <h5 contenteditable="true" id="phone">Phone: </h5>
  <h5 contenteditable="true" id="email">Email: </h5>
  <h5 contenteditable="true" id="website">www.examplewebsite.com</h5>
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

export default EditProfile;