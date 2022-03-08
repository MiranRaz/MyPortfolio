import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/">home</Link>
        </div>
        <div className="bar">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
