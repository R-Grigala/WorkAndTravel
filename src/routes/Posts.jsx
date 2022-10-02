import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

import React from 'react'
import HeroImg from '../pages/Posts/HeroImgPosts';
import Work from '../components/Blog/Work';

const Posts = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Posts