import React from "react";
import "./style.css";
import API from "../../utils/API";

class AddProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '', 
            email: '',
            password: '',
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
        API.addProfile({ name: this.state.name,
                         email: this.state.email,
                         password: this.state.password,
                         bname: this.state.bname,
                         location: this.state.location,
                         bdesc: this.state.bdesc,
                         phone: this.state.phone,
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
                        <h3 className="display-3">Add your Business</h3>
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
                            <div className="form-group">
                                <label htmlFor="BizContactEmail">Email Id (also your username)</label>
                                <input name="email" type="email" className="form-control col-sm-4" id="BizContactEmail" aria-describedby="BizContactEmail" placeholder="Enter email" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizPassword">Create Password</label>
                                <input name="password" type="password" className="form-control col-sm-4" id="BizContactPassword" aria-describedby="BizContactPassword" placeholder="Atleast 8 letters" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizConfirmPassword">Confirm Password</label>
                                <input type="password" className="form-control col-sm-4" id="BizContactPassword" aria-describedby="BizContactPassword" placeholder="Atleast 8 letters" required/>
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
                                <textarea name="bdesc" rows="5" cols="50" name="BizDescription" className="form-control col-sm-5" aria-describedby="BizDescription" placeholder="What does your business do?" onChange={this.handleChange}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizContactPhone">Contact Phone Number</label>
                                <input name="phone" type="tel" className="form-control col-sm-3" id="BizContactPhone" aria-describedby="BizContactPhone" placeholder="Enter Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizCategory" for="sel1"> Business Category</label>
                                <select name="category" className="form-control col-sm-4" id="sel1" onChange={this.handleChange} required>
                                    <option value ="">Select One</option>
                                    <option value ="finance">Finance</option>
                                    <option value ="consulting">Consulting</option>
                                    <option value ="retail">Retail</option>
                                    <option value ="rEstate">Real Estate</option>
                                    <option value ="restaurants">Restaurants/Bars</option>
                                    <option value ="technology">Technology</option>
                                    <option value ="agriculture">Agriculture</option>
                                    <option value ="oFood">Other Food</option>
                                    <option value ="media">Media</option>
                                    <option value ="trade">Trade</option>
                                    <option value ="agriculture">Agriculture</option>
                                    <option value ="others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="BizAudience">Audience</label>
                                <input name="audience" type="text" className="form-control col-sm-5" id="BizAudience" aria-describedby="BizAudience" placeholder="Enter Business Audience group" onChange={this.handleChange}/>
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
}


export default AddProfile;
