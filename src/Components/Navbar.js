import React, { useRef } from "react";
import "../Styles/Navbar.scss";

import logo from "../images/logo.svg";

function Navbar() {
  const navabr = useRef(null);

  const toggleNavbar = () => {
    navabr.current.classList.toggle("open");
  };

  return (
    <div className="navbar" ref={navabr}>
      <img src={logo} alt="" />
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/#">Pricing</a>
        </li>
        <li className="navbar__link">
          <a href="/#">Product</a>
        </li>
        <li className="navbar__link">
          <a href="/#">About Us</a>
        </li>
        <li className="navbar__link">
          <a href="/#">Careers</a>
        </li>
        <li className="navbar__link">
          <a href="/#">Community</a>
        </li>
      </ul>

      <div className="navbar__toggle-btn" onClick={toggleNavbar}>
        <div className="line"></div>
      </div>

      <button className="desktop">Get Started</button>
    </div>
  );
}

export default Navbar;
