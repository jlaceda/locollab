import React from "react";
import "./style.css";
import StockPhoto from "./bgsmall.png"
import API from "../../utils/API";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        };
        API.getProfiles().then(res => {
            if (res.data.profiles !== undefined) {
                this.setState({
                    profiles: res.data.profiles
                });
            }
        })
    }

    render() {
        let profiles;
        if (this.state.profiles.length < 1) {
            profiles = <div className="media" >No Businesses Found!</div>;
        } else {
            profiles = <div>
                {this.state.profiles.reverse().map(profile => {
                    return(
                        <div className="media" business-id={profile._id} key={profile._id}>
                            <img src={StockPhoto} className="mr-3" alt="..."></img>
                            <div className="media-body">
                                <div className = "mt-0 business-profile-name"> <Link to={"/profile/" + profile._id}> {profile.bname} </Link></div>
                                <p>{profile.description}</p>
                                <p>{profile.location}</p>
                                <p>{profile.category}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        }
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Businesses in Seattle, WA</h1>
                </div>
                {profiles}
            </div>
        )
    }
}

export default Home;