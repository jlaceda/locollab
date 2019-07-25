import React from "react";
import "./style.css";

const BizProfile = props => (

    <div className="container">
        <div className="container">
            <button type="back" class="btn btn-primary">Back</button>
        </div>
        <div className="container">
            <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
            <form className="form-horizontal">
                <div className="form-group" >
                    <label for="BizName" className="control-label col-sm-2">Name</label>
                    <input type="text" className="form-control col-sm-4" id="BizName" aria-describedby="BizName" placeholder="Enter Business name" />
                </div>
                <div className="form-group">
                    <label for="BizLocation">Location</label>
                    <input type="text" className="form-control col-sm-4" id="BizLocation" aria-describedby="BizLocation" placeholder="Enter Business Location" />
                </div>
                <div className="form-group">
                    <label for="BizDescription">Description</label>
                    <textarea rows="5" cols="50" name="BizDescription" className="form-control col-sm-5" aria-describedby="BizDescription" placeholder="What does your business do?">
                    </textarea>
                </div>
                <div className="form-group">
                    <label for="BizContactPhone">Contact Phone Number</label>
                    <input type="tel" className="form-control col-sm-3" id="BizContactPhone" aria-describedby="BizContactPhone" placeholder="Enter Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div className="form-group">
                    <label for="BizContactEmail">Contact Email Id</label>
                    <input type="email" className="form-control col-sm-4" id="BizContactEmail" aria-describedby="BizContactEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="BizCategory">Category</label>
                    <input type="text" className="form-control col-sm-4" id="BizCategory" aria-describedby="BizCategory" placeholder="Enter Business Category" />
                </div>
                <div className="form-group">
                    <label for="BizServices">Services Provided</label>
                    <input type="text" className="form-control col-sm-6" id="BizServices" aria-describedby="BizServices" placeholder="Enter Services provided" />
                </div>
                <div className="form-group">
                    <label for="BizAudience">Audience</label>
                    <input type="text" className="form-control col-sm-5" id="BizAudience" aria-describedby="BizAudience" placeholder="Enter Business Audience group" />
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
            </div>
            </div>
        </div>
    </div>
);

export default BizProfile;
