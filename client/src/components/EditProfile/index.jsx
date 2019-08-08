import React from "react";
import "./style.css";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import { UserContext } from "../../user-context";

class EditProfile extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let profile = this.state.profile;
        profile[event.target.name] = event.target.value;
        this.setState({ profile });
    }

    handleSubmit(event) {
        event.preventDefault()
        let userContext = this.context;
        console.log('handleSubmit');
        API.editProfile(userContext.businessId,
            { 
                name: this.state.profile.name,
                bname: this.state.profile.bname,
                location: this.state.profile.location,
                bdesc: this.state.profile.bdesc,
                phone: this.state.profile.phone,
                bemail: this.state.profile.bemail,
                website: this.state.profile.website,
                category: this.state.profile.category,
                audience: this.state.profile.audience
            }).then(res => {
                console.log(res.data);
                this.setState({
                    redirectTo: "/userProfile"
                })
            }).catch(err => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        let userContext = this.context;
        console.log(userContext);
        if (userContext.loggedIn) {
          API.specificProfile(userContext.businessId).then(response => {
            this.setState({
              profile: response.data.profile
            })
          });
        } else {
          this.setState({
            redirectTo: "/login?noProfile=1"
          })
        }
      }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
          } else {
            console.log(this.state.profile)
            if (this.state.profile) {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h3 className="display-3">Edit Profile</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <form className="form-horizontal">
                            <div className="form-group" >
                                <label htmlFor="Name">Name</label>
                                <input value={this.state.profile.name} name="name" type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Your Name" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="BizName">Business Name</label>
                                <input value={this.state.profile.bname} name="bname" type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Enter Business name" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizLocation">Location</label>
                                <input value={this.state.profile.location} name="location" type="text" className="form-control col-sm-4" id="BizLocation" aria-describedby="BizLocation" placeholder="Enter Business Location" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizDescription">Business Description</label>
                                <textarea value={this.state.profile.bdesc} name="bdesc" rows="5" cols="50" className="form-control col-sm-5" aria-describedby="BizDescription" placeholder="What does your business do?" onChange={this.handleChange}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactPhone">Contact Phone Number</label>
                                <input value={this.state.profile.phone} name="phone" type="tel" className="form-control col-sm-3" id="BizContactPhone" aria-describedby="BizContactPhone" placeholder="Enter Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactEmail">Contact Email </label>
                                <input value={this.state.profile.bemail} name="bemail" type="email" className="form-control col-sm-4" id="BizContactEmail" aria-describedby="BizContactEmail" placeholder="Enter business email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactEmail">Business Website </label>
                                <input value={this.state.profile.website} name="website" type="url" className="form-control col-sm-4" id="BizContactwebsite" aria-describedby="BizContactWebsite" placeholder="Enter business webpage" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizCategory sel1"> Business Category</label>
                                <select name="category" className="form-control col-sm-4" id="sel1" onChange={this.handleChange} required>
                                <option value ="">Select One</option>
                                    <option value ="Agriculture">Agriculture</option>
                                    <option value ="Consulting">Consulting</option>
                                    <option value ="Finance">Finance</option>
                                    <option value ="Health/ Fitness">Health/Fitness</option>
                                    <option value ="Media">Media</option>
                                    <option value ="Real Estate">Real Estate</option>
                                    <option value ="Restaurants/ Bars">Restaurants/Bars</option>
                                    <option value ="Retail">Retail</option>
                                    <option value ="Other Food">Other Food</option>
                                    <option value ="Technology">Technology</option>
                                    <option value ="Trade">Trade</option>
                                    <option value ="Others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizAudience">Audience</label>
                                <input value={this.state.profile.audience} name="audience" type="text" className="form-control col-sm-5" id="BizAudience" aria-describedby="BizAudience" placeholder="Enter Business Audience group" onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-primary submit" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
            }
            return <div>Loading...</div>
          }
    }
}

EditProfile.contextType = UserContext;

export default EditProfile;
