import React, { useState } from "react";
import "./Header.css";
import CurvedCarousel from "../curved/curvedCorousal"; // Import the CurvedCarousel component
import { CiMenuFries } from "react-icons/ci";
// import FontAwesomeIcon from '../h'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar">
        <img src="sologo.png" alt="Logo" className="logo" />
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="header-menu">
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#work" onClick={closeMenu}>
            WORK
          </a>
          <a href="#brand" onClick={closeMenu}>
            NEED BRAND
          </a>
          <a href="#influencer" className="need-influ" onClick={closeMenu}>
            NEED INFLUENCER
          </a>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
          </div>
          <button className="connect-button" onClick={closeMenu}>
            Let's Connect
          </button>
        </div>


        {/* <div  onClick={toggleMenu}> */}
        {/* <CiMenuFries /> */}
        {/* <div className={`bar ${menuOpen ? "open" : ""}`}></div> */}
        {/* <CiMenuFries className={`menu-icon ${menuOpen ? "open" : ""}`} /> */}

        {/* </div> */}
      </div>
      <div className="main-content">
        <h1>
          Get Real <span className="highlight">ROI</span> From
          <span className="highlight"> Influencer</span> Marketing
        </h1>
        <p className="main-title">
          A good design is not only aesthetically pleasing, but also functional. <br/>
          It should be able to solve the problem.
        </p>
        <div className="buttons">
          <button className="brand-button">BRAND</button>
          <button className="influencer-button">INFLUENCER</button>
        </div>
      </div>
      {/* Insert the CurvedCarousel here */}
      <CurvedCarousel />
    </header>
  );
};

export default Header;
