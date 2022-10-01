import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import React from 'react'
import HeroImg from '../components/Projects/HeroImgProject';
import Work from '../components/Blog/Work';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects