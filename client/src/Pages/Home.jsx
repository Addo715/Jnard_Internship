import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import About from "../Components/Abouts";
import NewsLetter from "../Components/NewsLetter";
import FAQ from "../Components/FAQ.JSX";
import Contact from "../Components/Contact";
import Deadlines from "../Components/Deadlines"; // Import the new component

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <Features />
      <Deadlines /> {/* Add the Deadlines component here */}
      <div id="about">
        <About />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
