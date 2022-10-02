import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

import React from 'react'
import HeroImg from '../pages/Projects/HeroImgProject';
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