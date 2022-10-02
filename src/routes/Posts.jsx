import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

import React from 'react'
import HeroImg from '../pages/Posts/HeroImgPosts';
import Post from '../components/post/Post'

const Posts = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Post />
      <Footer />
    </div>
  )
}

export default Posts