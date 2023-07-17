import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TopResturantSection from "./components/TopResturantSection";
import { ExploreFoodData } from "./components/ExploreFoodData";
import  AddToCardSection  from "./components/AddToCardSection";
import OurServices from "./components/OurServices";
function App() {
  return (
    <div>
      <HeroSection />
      <TopResturantSection />
      <OurServices/>
      <ExploreFoodData/>
      <AddToCardSection/>
      <Footer /> 
     
    </div>
  );
}

export default App;
