import React from 'react'
import NavBar from '../components/NavBar';
import HeroImg from '../components/HeroImgHome';
import Footer from '../components/Footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
        {/* Navbar.js ის გამოძახება  */}
        <NavBar />
        
        {/* HeroImg ის გამოძახება რომელიც background აჩვენებს */}
        <HeroImg />
        <Work />

        <Footer />

    </div>
  )
}

export default Home