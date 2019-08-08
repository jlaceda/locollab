import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import {UserContext} from "../../user-context";

class Login extends Component {
     constructor(props) {
          super(props)
          this.state = {
               username: '',
               password: '',
               reidrectTo: null,
               loggedIn: false,
               businessId: "",
               userId: "",
          }
     }

     handleChange = (event) => {
          this.setState({
               [event.target.name]: event.target.value
          })
     }

     handleSubmit = (event) => {
          event.preventDefault()
          console.log('handleSubmit');
          let userContext = this.context;
          axios
               .post('/user/login', {
                    email: this.state.email,
                    password: this.state.password
               })
               .then(response => {
                    console.log('login response: ')
                    console.log(response.data)
                    if (response.data.status === "ok") {
                         // // update App.js state (context API)
                         // this.props.updateUser({
                         //      loggedIn: true,
                         //      username: response.data.username
                         // })
                         // update the state to redirect to home
                         console.log("response data:", response.data);
                         console.log(userContext)
                         console.log(userContext.updateUserContext)

                         userContext.updateUserContext({
                              loggedIn: true,
                              businessId: response.data.business,
                              userId: response.data.userId,
                         })
                         
                         this.setState({
                              redirectTo: "/userProfile"
                         })
                         
                    } else {
                         this.setState({
                              redirectTo: "/login?failedLogin=1"
                         })
                    }
               }).catch(error => {
                    console.log('login error: ');
                    console.log(error);
               })
     }

     render() {
          if (this.state.redirectTo) {
               return <Redirect to={{ pathname: this.state.redirectTo }} />
          } else {
               return (
                    <div className="spacing">
                         <div className="card m-auto">
                              <div className="card-body">
                                   <form>
                                        <div className="form-group-row">
                                             <div className="col-auto">
                                                  <label className="sr-only" htmlFor="username">Username</label>
                                                  <div className="input-group mb-2">
                                                       <div className="input-group-prepend">
                                                            <div className="input-group-text">@</div>
                                                       </div>
                                                       <input className="form-control"
                                                            type="text"
                                                            id="username"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="form-group-row">
                                             <div className="col-auto">
                                                  <input className="form-control"
                                                       placeholder="Password"
                                                       type="password"
                                                       name="password"
                                                       value={this.state.password}
                                                       onChange={this.handleChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="form-group-row">
                                             <div className="col-auto">
                                                  <button 
                                                       className="mt-2 btn btn-primary" 
                                                       onClick={this.handleSubmit}
                                                       type="submit" 
                                                  >Submit</button>
                                             </div>
                                        </div>
                                   </form>
                                   <p className="lead mt-4">
                                        No Account? <a href="/newProfile">Create Account</a>
                                   </p>
                              </div>
                         </div>
                    </div>
               )
          }
     }
}
Login.contextType = UserContext;

export default Login;