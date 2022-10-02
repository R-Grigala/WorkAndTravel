import React from 'react'
import NavBar from '../components/navbar/NavBar';
import HeroImg from '../pages/Home/HeroImgHome';
import Footer from '../components/footer/Footer';
import Work from '../components/Blog/Work';

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