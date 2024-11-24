import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
        <Features/>
        <Demo/>
        <Pricing/>
        <AboutUs/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
