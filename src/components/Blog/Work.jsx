import "./WorkCard.css"

import React from 'react';

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="post-heading">Posts</h1>
        <div className="post-container">
            {WorkCardData.map((val, index) => {
                return(
                    <WorkCard 
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    author={val.author}
                    />
                )
            })
            }
        </div>
    </div>
  )
}

export default Work