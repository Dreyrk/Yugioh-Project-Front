import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/src/logo";

function Header() {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="Yugioh logo" />
      </NavLink>
    </div>
  );
}

export default Header;
