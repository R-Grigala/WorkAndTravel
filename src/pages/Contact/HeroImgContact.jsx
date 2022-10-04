import "./HeroImgContact.css"

import React from 'react'
import HeroImg from "../../assets/images/Contact-img.jpg"

import { 
  FaHome, 
  FaPhone, 
  FaMailBulk, 
} from "react-icons/fa"

const HeroImgContact = () => {
  return (
    <div className="hero-img">
        <div className="mask">
            <img className="contact-img"
            src={HeroImg} alt="ContactImg"/>
        </div>
        <div className="heading">
            <h1>Contact Us: Let's Work Together</h1>
          <table className="contact-us">
            <tbody>
              <tr className="location-us">
                  <th>
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                      724 40 th st.Brooklyn, NY, 11232
                  </th>
              </tr>
              <tr className="phone">
                  <th>
                      <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                      +1 347 864 2538
                  </th>
              </tr>
              <tr className="email">
                  <th>
                  <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                  leonardgory@gmail.com
                  </th>
              </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default HeroImgContact