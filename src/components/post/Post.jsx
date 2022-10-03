import "./PostCard.css"

import React from 'react';

import PostCard from "./PostCard";
import { blog} from "../../assets/data/data";

const Post = () => {
  return (
    <div className="posts-container">
        <h1 className="post-heading">Posts</h1>
        <div className="post-container">
            {blog.map((item, index) => {
                return(
                    <PostCard 
                    key={index}
                    id={item.id}
                    cover={item.cover}
                    title={item.title}
                    desc={item.desc}
                    author={item.author}
                    />
                )
            })
            }
        </div>
    </div>
  )
}

export default Post