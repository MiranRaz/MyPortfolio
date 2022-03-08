import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import "./Main.scss";

import Navbar from "../navbar/Navbar";
import SideMenu from "../sidemenu/SideMenu";
import HomePage from "../homepage/Homepage";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mainContainer">
      <div className="page">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/MyPortfolio/" exact element={<HomePage />} />
          <Route path="/MyPortfolio/portfolio" exact element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
