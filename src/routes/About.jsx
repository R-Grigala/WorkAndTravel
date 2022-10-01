import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import React from 'react'
import HeroImg from '../components/About/HeroImgAbout';
import AboutContent from '../components/About/AboutContent';

const About = () => {
  return (
    <div>
    <NavBar />
    <HeroImg />
    <AboutContent />
    <Footer />
  </div>
  )
}

export default About