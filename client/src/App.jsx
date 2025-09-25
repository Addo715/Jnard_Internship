import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./Pages/PersonalInfo";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Upload from "./Pages/Upload";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personal-info" element={<PersonalInfo/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    
    </div>
  );
};

export default App;
