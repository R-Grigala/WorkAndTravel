import "./HeroImgPosts.css"

import React from 'react'
import ProjectImg from "../../assets/images/Project-img.jpg"

const HeroImgPosts = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="post-img"
            src={ProjectImg} alt="PostImg"/>
        </div>
        <div className="heading">
            <h1>This is a heading</h1>
            <p>This is a text</p>
        </div>
    </div>
  )
}

export default HeroImgPosts