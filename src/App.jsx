import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Navbar from "./components/Navbar";
import calculator from "/src/assets/calculator.webp";
function App() {

  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About 
         image={calculator}
            name="Digital Calculator"
            lang="HTML, CSS, JavaScript" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
