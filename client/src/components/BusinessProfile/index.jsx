import React from "react";
import "./style.css";
import photo from "./bgsmall.png"
import API from "../../utils/API";

class BusinessProfile extends React.Component {
    constructor() {
      super()
      this.state = {
        profile : ''
      }
    }
    componentDidMount() {
      API.specificProfile(this.props.match.params.id).then(response => {
        this.setState({
          profile: response.data.profile
        })
      })
    }
    
  render() {
    console.log(this.state.profile);
    return (
      <div className="container">
        <div className="row" id="head">
          <div className="jumbotron">

            <div className="row">
              <div className="col-4">
                <img src={photo} className="mr-3" alt="..."></img>
              </div>
              <div className="col-8">
                <h1 className="display-4">{this.state.profile.bname}</h1>
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
            <div className="card">
              <div className="card-body">

                <p className="card-title">Free Samples
      <span className="date">6/17/19 2:30pm Seattle, WA</span>
                </p>

                <p className="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">

                <p className="card-title">Free Samples
      <span className="date">6/17/19 2:30pm Seattle, WA</span>
                </p>

                <p className="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default BusinessProfile;