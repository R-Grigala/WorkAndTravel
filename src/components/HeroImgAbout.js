import "./HeroImgAbout.css"

import React from 'react'
import AboutImg from "../assets/About-img.jpg"

const HeroImgAbout = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="about-img"
            src={AboutImg} alt="AboutImg"/>
        </div>
        <div className="content">
            <h1>Why Akatsuki Business Academia?</h1>
            <p>
                Our goal is to motivate and help Georgian students to find their true visions 
                and not only inspire them but give them an opportunity to build their future with their own hands. 
                Here is how we see it.: we are looking for a sponsor organization that will help us complete our 
                “Work and Invest through the USA” project, where we will nominate our certified applicants, 
                who will have developed their top three business ideas through our course and by sending them to the US, 
                we will have these students to legally earn financial support for their business plan.
            </p>
        </div>
    </div>
  )
}

export default HeroImgAbout