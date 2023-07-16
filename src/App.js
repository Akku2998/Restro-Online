import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TopResturantSection from "./components/TopResturantSection";

function App() {
  return (
    <div>
      <HeroSection />
      <TopResturantSection />
      <Footer />
    </div>
  );
}

export default App;
