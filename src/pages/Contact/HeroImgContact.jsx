import "./HeroImgContact.css"

import React from 'react'
import HeroImg from "../../assets/images/Contact-img.jpg"

const HeroImgContact = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="contact-img"
            src={HeroImg} alt="ContactImg"/>
        </div>
        <div className="heading">
            <h1>This is a heading</h1>
            <p>This is a text</p>
        </div>
    </div>
  )
}

export default HeroImgContact