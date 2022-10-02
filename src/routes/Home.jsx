import React from 'react'
import NavBar from '../components/navbar/NavBar';
import HeroImg from '../pages/Home/HeroImgHome';
import Footer from '../components/footer/Footer';
import Post from '../components/post/Post';

const Home = () => {
  return (
    <div>
        {/* Navbar.js ის გამოძახება  */}
        <NavBar />
        
        {/* HeroImg ის გამოძახება რომელიც background აჩვენებს */}
        <HeroImg />
        <Post />
        <Footer />

    </div>
  )
}

export default Home