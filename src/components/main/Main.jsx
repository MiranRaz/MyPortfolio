import React, { useState } from "react";
import "./Main.scss";

import Navbar from "../navbar/Navbar";
import SideMenu from "../sidemenu/SideMenu";
//import HomePage from "../homepage/Homepage";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mainContainer" id="main">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <HomePage /> */}
      <Portfolio />
      <Footer />
    </div>
  );
}
