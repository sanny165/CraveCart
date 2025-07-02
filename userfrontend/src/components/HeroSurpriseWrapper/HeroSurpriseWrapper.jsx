import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import SurpriseDish from "../SurpriseDish/SurpriseDish";
import "./HeroSurpriseWrapper.css";

const HeroSurpriseWrapper = () => {
  return (
    <div className="hero-surprise-wrapper">
      <div className="left-section">
        <HeroCarousel />
      </div>
      <div className="right-section">
        <SurpriseDish />
      </div>
    </div>
  );
};

export default HeroSurpriseWrapper;
