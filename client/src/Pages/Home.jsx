import React from 'react'
import Footer from '../Components/Footer'
import Hero from "../Components/Hero"
import Features from "../Components/Features"
// import Contact from '../Components/Contact'
import About from '../Components/Abouts'
import NewsLetter from '../Components/NewsLetter'
import FAQ from '../Components/FAQ.JSX'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    // <div>
    //   <Hero/>
    //   <Features/>
    //   <About/>
    //   <FAQ/>
    //   {/* <Contact/> */}
    //   <NewsLetter/>
    //   <Footer/>
    // </div>

     <div>
      <div id="home">
        <Hero/>
      </div>
      <Features/>
      <div id="about">
        <About/>
      </div>
      <div id="faq">
        <FAQ/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
      {/* <div id="contact"> */}
        <NewsLetter/> {/* or add a Contact component here */}
      {/* </div> */}
      <Footer/>
    </div>
  )
}

export default Home