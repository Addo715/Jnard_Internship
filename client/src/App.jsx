// import React from "react";
// import Home from "./Pages/Home";
// import Navbar from "./Components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import PersonalInfo from "./Pages/PersonalInfo";
// import Education from "./Pages/Education";
// import Skills from "./Pages/Skills";
// import Upload from "./Pages/Upload";
// import Admin from "./Components/Admin";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/personal-info" element={<PersonalInfo />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/upload" element={<Upload />} />
//         <Route path="/Admin" element={<Admin/>} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import PersonalInfo from "./Pages/PersonalInfo";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Upload from "./Pages/Upload";
import Admin from "./Components/Admin";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/Admin";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;