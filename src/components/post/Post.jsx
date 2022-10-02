import "./PostCard.css"

import React from 'react';

import PostCard from "./PostCard";
import { blog} from "../../assets/data/data";

const Post = () => {
  return (
    <div className="work-container">
        <h1 className="post-heading">Posts</h1>
        <div className="post-container">
            {blog.map((val, index) => {
                return(
                    <PostCard 
                    key={index}
                    cover={val.cover}
                    title={val.title}
                    desc={val.desc}
                    author={val.author}
                    />
                )
            })
            }
        </div>
    </div>
  )
}

export default Post