import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/Projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/Games" activeStyle>
            Games
          </NavLink>
          <NavLink to="/Research" activeStyle>
            Research
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
