import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import MRLOGO from "../../img/MRLOGO.png";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [" Engineer", " Developer", " Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={MRLOGO} alt="Logo" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h1>Miran Ražnatović</h1>
          <h3>
            Software <span className="text" ref={textRef}></span>
          </h3>
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
