import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import pages
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className='main'>
      <nav>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/services">Services</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
