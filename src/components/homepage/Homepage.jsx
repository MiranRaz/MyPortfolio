import React from "react";
import "../homepage/Homepage.scss";

import video1 from "../../vid/zvijezde.mp4";
import MRLOGO from "../../img/MRLOGO.png";

export default function Homepage() {
  return (
    <div className="homepage" id="homepage">
      <div className="mainVideo">
        <video src={video1} autoPlay loop muted type="video/mp4" alt="video" />
      </div>
      <div className="mainImage">
        <img className="logo" src={MRLOGO} alt="slika" />
      </div>
    </div>
  );
}
