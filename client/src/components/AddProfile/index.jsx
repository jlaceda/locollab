import React from "react";
import "./style.css";
import API from "../../utils/API";

class AddProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit');
        API.addProfile({name: this.state.name})
    }
    render() {
        return (
            <div className="container">
        <div className="container">
            <button type="back" className="btn btn-primary" onClick={() => window.location.href="/"}>Back</button>
        </div>
        <div className="container">
            <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
            <form className="form-horizontal">
                <div className="form-group" >
                    <label htmlFor="BizName" className="control-label col-sm-2">Name</label>
                    <input name="name" type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Enter Business name" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="BizLocation">Location</label>
                    <input name="location" type="text" className="form-control col-sm-4" id="BizLocation" aria-describedby="BizLocation" placeholder="Enter Business Location" />
                </div>
                <div className="form-group">
                    <label htmlFor="BizDescription">Description</label>
                    <textarea rows="5" cols="50" name="BizDescription" className="form-control col-sm-5" aria-describedby="BizDescription" placeholder="What does your business do?">
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="BizContactPhone">Contact Phone Number</label>
                    <input type="tel" className="form-control col-sm-3" id="BizContactPhone" aria-describedby="BizContactPhone" placeholder="Enter Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div className="form-group">
                    <label htmlFor="BizContactEmail">Contact Email Id</label>
                    <input type="email" className="form-control col-sm-4" id="BizContactEmail" aria-describedby="BizContactEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="BizCategory">Category</label>
                    <input type="text" className="form-control col-sm-4" id="BizCategory" aria-describedby="BizCategory" placeholder="Enter Business Category" />
                </div>
                <div className="form-group">
                    <label htmlFor="BizServices">Services Provided</label>
                    <input type="text" className="form-control col-sm-6" id="BizServices" aria-describedby="BizServices" placeholder="Enter Services provided" />
                </div>
                <div className="form-group">
                    <label htmlFor="BizAudience">Audience</label>
                    <input type="text" className="form-control col-sm-5" id="BizAudience" aria-describedby="BizAudience" placeholder="Enter Business Audience group" />
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
                </div>
            </form>
            </div>
            </div>
        </div>
    </div>
        )
    }
}


export default AddProfile;
