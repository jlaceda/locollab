import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

class NewAccount extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('NewAccount handleSubmit, username: ');
    console.log(this.state.username);
    event.preventDefault();

    // request to server to add a new username/password
    axios.post('/user/', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response)
      if(!response.data.errmsg) {
        console.log('successful signup')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('username already taken')
      }
    }).catch(error => {
      console.log('signup error: ');
      console.log(error);
    })
  }
  
  render() {
    return (
      <div class="container outside mt-4">
        <div class="card container m-auto">
          <div class="card-body">
            <h5 class="card-title">Create Account</h5>
            <form>
              <div class="form-row">
                <div class="col-md-8 col-sm-4 mb-3">
                  <label for="validationDefault01">Name</label>
                  <input type="text" class="form-control" id="validationDefault01" placeholder="Name"
                    value="Hank Hill" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-8 col-sm- mb-3">
                  <label for="validationDefault02">Business Name</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Business Name"
                    value="Strickland Propane" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-8 col-sm- mb-3">
                  <label for="validationDefault03">Address</label>
                  <input type="text" class="form-control" id="validationDefault03" placeholder="Address"
                    value="135 Los Gatos Rd" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefaultUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    </div>
                    <input type="text" class="form-control" id="validationDefaultUsername"
                      placeholder="thehankhill" aria-describedby="inputGroupPrepend2" required />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault04">City</label>
                  <input type="text" class="form-control" id="validationDefault04" placeholder="Arlen" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">State</label>
                  <input type="text" class="form-control" id="validationDefault05" placeholder="TX" required />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault06">Zip</label>
                  <input type="text" class="form-control" id="validationDefault06" placeholder="75032" required />
                </div>
              </div>
              <div className="form-row">
                <div class="form-group col-6 mb-2">
                  <label html="inputPassword">Password</label>
                  <div className="input-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-6 mb-2">
                  <label for="inputPassword2" class="sr-only">Confirm Password</label>
                  <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit Form</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewAccount;