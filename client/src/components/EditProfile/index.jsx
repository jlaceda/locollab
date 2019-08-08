import React from "react";
import "./style.css";
import API from "../../utils/API";

class EditProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '', 
            bname: '',
            location: '',
            bdesc: '',
            phone: '',
            category: '',
            audience: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit');
        API.editProfile({ name: this.state.name,
                         bname: this.state.bname,
                         location: this.state.location,
                         bdesc: this.state.bdesc,
                         phone: this.state.phone,
                         bemail: this.state.bemail,
                         website: this.state.website,
                         category: this.state.category,
                         audience: this.state.audience
                        })
    }

    checkPassword(){}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="jumbotron">
                        <h3 className="display-3">Edit Profile</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <form className="form-horizontal">
                            <div className="form-group" >
                                <label htmlFor="Name">Name</label>
                                <input name="name" type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Enter Business name" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="BizName">Business Name</label>
                                <input name="bname" type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Enter Business name" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizLocation">Location</label>
                                <input name="location" type="text" className="form-control col-sm-4" id="BizLocation" aria-describedby="BizLocation" placeholder="Enter Business Location" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizDescription">Business Description</label>
                                <textarea name="bdesc" rows="5" cols="50" className="form-control col-sm-5" aria-describedby="BizDescription" placeholder="What does your business do?" onChange={this.handleChange}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactPhone">Contact Phone Number</label>
                                <input name="phone" type="tel" className="form-control col-sm-3" id="BizContactPhone" aria-describedby="BizContactPhone" placeholder="Enter Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactEmail">Contact Email </label>
                                <input name="bemail" type="email" className="form-control col-sm-4" id="BizContactEmail" aria-describedby="BizContactEmail" placeholder="Enter business email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactEmail">Business Website </label>
                                <input name="website" type="url" className="form-control col-sm-4" id="BizContactwebsite" aria-describedby="BizContactWebsite" placeholder="Enter business webpage" onChange={this.handleChange} />
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
                                <input name="audience" type="text" className="form-control col-sm-5" id="BizAudience" aria-describedby="BizAudience" placeholder="Enter Business Audience group" onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <button href='/userProfile' type="submit" className="btn btn-primary submit" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default EditProfile;
