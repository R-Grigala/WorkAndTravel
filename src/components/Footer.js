import "./Footer.css";

import React from 'react'
import { 
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaFacebook, 
    FaTwitter,
     
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>მისამართი</p>
                        <p>Georgia</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                        +1 347 864 2538
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    leonardgory@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>
                    Akatsuki Business Academia is the only business organization in Georgia that is a partner of CIEE 
                    <p>(Council on international education exchange - CIEE)</p>
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "2rem" }}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "2rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer