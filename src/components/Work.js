import "./WorkCard.css"

import React from 'react';

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        {/* <h1 className="project-heading">Posts</h1> */}
        <div className="project-container">
            {WorkCardData.map((val, index) => {
                return(
                    <WorkCard 
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    />
                )
            })
            }
        </div>
    </div>
  )
}

export default Work