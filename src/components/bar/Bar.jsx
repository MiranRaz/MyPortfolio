import React from "react";
import MRLOGO from "../../img/MRLOGO.png";
import "./Bar.scss";

export default function Bar() {
  return (
    <div className="navBody">
      <div className="sidebar">
        <div>
          <a href="#intro">
            <img src={MRLOGO} alt="MR" className="logoMR" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#intro">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a href="#works">
              <span className="icon">
                <ion-icon name="documents-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="icon">
                <ion-icon name="code-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}
