import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

import React from 'react'
import HeroImg from '../pages/Projects/HeroImgProject';
import Post from '../components/post/Post';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Post />
      <Footer />
    </div>
  )
}

export default Projects