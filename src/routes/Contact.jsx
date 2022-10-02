import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import React from 'react'

import HeroImg from '../pages/Contact/HeroImgContact';
import ContactUs from '../pages/Contact/ContactUs';

const Contact = () => {
  return (
    <div>
    <NavBar />
    <HeroImg />
    <ContactUs />
    <Footer />
  </div>
  )
}

export default Contact