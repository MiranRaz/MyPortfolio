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
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="page">
        <Routes>
          <Route path="/MyPortfolio/" exact element={<HomePage />} />
          <Route path="/MyPortfolio/portfolio" exact element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
