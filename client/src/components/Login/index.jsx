import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

class Login extends Component {
     constructor() {
          super()
          this.state = {
               username: '',
               password: '',
               reidrectTo: null
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

          axios
               .post('/user/login', {
                    email: this.state.email,
                    password: this.state.password
               })
               .then(response => {
                    console.log('login response: ')
                    console.log(response)
                    if (response.data.status === "ok") {
                         // // update App.js state (context API)
                         // this.props.updateUser({
                         //      loggedIn: true,
                         //      username: response.data.username
                         // })
                         // update the state to redirect to home
                         this.setState({
                              redirectTo: '/'
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

export default Login;