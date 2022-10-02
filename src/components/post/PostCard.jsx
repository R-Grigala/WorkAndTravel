import "./PostCard.css"

import React from 'react';
import { NavLink } from "react-router-dom";

const PostCard = (props) => {
  return (
    <div className="post-card">
        <h2 className="post-title">{props.title}</h2>
        <img src={props.cover} alt="post-card-img" />
        <div className="post-details">
            <p>{props.desc.slice(0, 119)}...</p>
            <h4>
                <span className="author">author:</span>
                <span className="author-name">{props.author}</span>
            </h4>
            
            <div className="post-btns">
                <NavLink to="url.com" 
                    className="btn">More</NavLink>

                {/* <NavLink to="url.com" 
                    className="btn">Beginning</NavLink> */}
            </div>
        </div>
    </div>
  )
}

export default PostCard