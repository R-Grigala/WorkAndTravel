import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am We?</h1>
            <p>
                Akatsuki Business Academia is business organization from Georgia
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent