import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TopResturantSection from "./components/TopResturantSection";
import { ExploreFoodData } from "./components/ExploreFoodData";

function App() {
  return (
    <div>
      <HeroSection />
      <TopResturantSection />
      <ExploreFoodData/>
      <Footer /> 
    </div>
  );
}

export default App;
