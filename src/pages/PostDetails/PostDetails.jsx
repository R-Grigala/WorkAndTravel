
import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import "./PostDetails.css"

import { blog } from "../../assets/data/data"
import Navbar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'

const PostDetails = () => {
    const { id } = useParams()
    const [bloges, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    },[id])

    return (
        <>
            {bloges ? (
                <>
                    <Navbar />
                    <div className="hero-details">
                        <div className="mask-details">
                            <img className="details-img"
                            src={bloges.cover} alt="BlogImg"/>
                        </div>
                        <div className="content-details">
                            <h1>{bloges.title}</h1>
                            <p>{bloges.desc}</p>
                            <h4>author:&emsp;{bloges.author}</h4>
                        </div>
                        <div className='foter-container'>
                        <Footer/>
                        </div>
                    </div>
                    
                </>
            ) : null }
        </>
  )
}

export default PostDetails