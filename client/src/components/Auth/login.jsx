import React from "react";
import "./style.css";

function Login () {
     return (
          <div className="card m-auto">
               <div className="card-body">
                    <form>
                         <div className="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                         </div>
                         <div className="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                         </div>
                         <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
               </div>
          </div>
     )
}

export default Login;