import "./HeroImgProject.css"

import React from 'react'
import ProjectImg from "../../assets/Images/Project-img.jpg"

const HeroImgProject = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="project-img"
            src={ProjectImg} alt="ProjectImg"/>
        </div>
        <div className="heading">
            <h1>This is a heading</h1>
            <p>This is a text</p>
        </div>
    </div>
  )
}

export default HeroImgProject