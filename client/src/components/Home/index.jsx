import React from "react";
import "./style.css";
import StockPhoto from "./bgsmall.png"

function Home() {
return(
<div class="container">
    <div class="jumbotron">
        <h1 class="display-4">Businesses in Seattle, WA</h1>
    </div>

    
    <div class="media">
        <img src={StockPhoto} class="mr-3" alt="..."></img>
         <div class="media-body">
            <h2 class="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div class="media">
        <img src={StockPhoto} class="mr-3" alt="..."></img>
         <div class="media-body">
            <h2 class="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div class="media">
        <img src={StockPhoto} class="mr-3" alt="..."></img>
         <div class="media-body">
            <h2 class="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div class="media">
        <img src={StockPhoto} class="mr-3" alt="..."></img>
         <div class="media-body">
            <h2 class="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>
    <div class="media">
        <img src={StockPhoto} class="mr-3" alt="..."></img>
         <div class="media-body">
            <h2 class="mt-0">Jamba Juice</h2>
            <p>Smoothies and Juices</p>
        </div>
    </div>

</div>


)
}

export default Home;