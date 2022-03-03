import React from "react";
import "./Intro.scss";
import MRLOGO from "../../img/MRLOGO.png";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={MRLOGO} alt="Logo" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Welcome</h2>
          <h1>Miran Ražnatović</h1>
          <h3>Software Engineer</h3>
        </div>

        <a href="#works">
          <span className="icon">
            <ion-icon name="chevron-down-circle-outline"></ion-icon>
          </span>
        </a>
      </div>
    </div>
  );
}
