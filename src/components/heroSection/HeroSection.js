import React from "react";
import "./HeroSection.css";
import video1 from "../../vid/zvijezde.mp4";
import mainLogo from "../../img/mainLogo.png";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted type="video/mp4" />
      <h1>MR</h1>
      {/* <img className="logo" src={mainLogo}></img> */}
    </div>
  );
}

export default HeroSection;
