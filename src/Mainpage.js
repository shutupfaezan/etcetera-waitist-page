import React from 'react'
import "./Mainpage.css"

export default function Mainpage() {
  return (
    <div class="bg-purple" style={{height: "100vh"}}>
        <div class="stars">
            <div class="custom-navbar">
                <div class="brand-logo">
                    <img src={process.env.PUBLIC_URL + "/images/ETCLOGO.png"} width="120px" style={{filter: "invert(100%)"}}/>
                </div>
            </div>
            <div class="central-body d-flex flex-column position-absolute" style={{top: "50%", width: "100%", left: "50%",
        transform: "translate(-50%, -50%)"}}>
                <div>
                    <h1 style={{color: "white", fontWeight: "900"}}>WE'RE ON A BREAK!</h1>
                    <h1  style={{color: "white", fontWeight: "900"}}>Come back later maybe, once the maintenance is done</h1>
                </div>
                {/* <img class="image-404" src={process.env.PUBLIC_URL + "/images/BREAK.png"} width="300px"/>
                <img class="image-404" src={process.env.PUBLIC_URL + "/images/BREAK.png"} width="300px"/> */}
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </div>
    </div>
  )
}
