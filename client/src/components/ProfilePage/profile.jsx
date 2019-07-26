import React from "react";
import "./style.css";



function Profile() {
return(
<div class="containter">
<div class="jumbotron">
  <h1 class="display-4">Business Name</h1>
  <h4>Contact Us:</h4>
  <h5>Phone: </h5>
  <h5>Email: </h5>
  <h5>www.examplewebsite.com</h5>
</div>
<div class="media">
  <img src="..." class="mr-3" alt="..."></img>
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    
  </div>
  <button class="btn btn-primary">Go somewhere</button>
  <button class="btn btn-primary">Save</button>
</div>
</div>
)
}

export default Profile;