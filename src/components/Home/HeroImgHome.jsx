import "./HeroImgHome.css";

import React from 'react'

import IntroImg from "../../assets/Images/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImgHome = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        {/* ტექსტი რომელიც ჩანს Home-ზე */}
        <h4>
          <span >Akatsuki Business Academia </span>
            is an agency that offers a business administration course to future entrepreneurs from Georgia, who are willing to grow their personalities into creators and business owners.
          </h4>
        <h1>Akatsuki Business Academia</h1>
        <div>
          <Link to="/about" className="btn">About</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImgHome