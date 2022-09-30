import "./HeroImgHome.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        {/* ტექსტი რომელიც ჩანს Home-ზე */}
        <h4>
          <span >Akatsuki Business Academy </span>
            is an agency that offers a business administration course to future entrepreneurs from Georgia, who are willing to grow their personalities into creators and business owners.
          </h4>
        <h1>Akatsuki Business Academy</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg