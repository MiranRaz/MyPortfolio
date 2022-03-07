import React, { useState } from "react";
import "./Main.scss";

import video1 from "../../vid/zvijezde.mp4";
import MRLOGO from "../../img/MRLOGO.png";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import SideMenu from "../sidemenu/SideMenu";
import Star from "../star/Star";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mainContainer" id="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Star />
      <div className="mainVideo">
        <video src={video1} autoPlay loop muted type="video/mp4" alt="video" />
      </div>
      <div className="mainImage">
        <img className="logo" src={MRLOGO} alt="slika" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
