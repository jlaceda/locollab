import React from "react";
import "./style.css";
import StockPhoto from "./bgsmall.png"



function Home() {
return(
<div className="container">
    <div className="jumbotron">
        <h1 className="display-4">Businesses in Seattle, WA</h1>
    </div>

    
    <div className="media">
        <img src={StockPhoto} className="mr-3" alt="..."></img>
         <div className="media-body">
            <h2 className="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div className="media">
        <img src={StockPhoto} className="mr-3" alt="..."></img>
         <div className="media-body">
            <h2 className="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div className="media">
        <img src={StockPhoto} className="mr-3" alt="..."></img>
         <div className="media-body">
            <h2 className="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div className="media">
        <img src={StockPhoto} className="mr-3" alt="..."></img>
         <div className="media-body">
            <h2 className="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div className="media">
        <img src={StockPhoto} className="mr-3" alt="..."></img>
         <div className="media-body">
            <h2 className="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>

</div>


)
}

export default Home;