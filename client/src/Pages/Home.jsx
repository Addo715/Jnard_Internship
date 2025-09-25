import React from 'react'
import Footer from '../Components/Footer'
import Hero from "../Components/Hero"
import Features from "../Components/Features"
// import Contact from '../Components/Contact'
import About from '../Components/Abouts'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <About/>
      {/* <Contact/> */}
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home