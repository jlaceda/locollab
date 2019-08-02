import React from "react";
import "./style.css";
import StockPhoto from "./bgsmall.png"
import API from "../../utils/API";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        };
        API.getProfiles().then(res => {
            this.setState({
                profiles: res.data.profiles
            });
        })
    }

    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1 class="display-4">Businesses in Seattle, WA</h1>
                </div>

                {
                this.state.profiles.map(profile => {
                    return (
                        <div class="media" business-id={profile._id}>
                            <img src={StockPhoto} class="mr-3" alt="..."></img>
                            <div class="media-body">
                                <h2 class="mt-0">{profile.name}</h2>
                                <p>{profile.description}</p>
                                <p>{profile.location}</p>
                                <p>{profile.category}</p>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        )
    }
}

export default Home;