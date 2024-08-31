import React, { useState } from "react";
import "./Header.css";
import CurvedCarousel from "../curved/curvedCorousal"; // Import the CurvedCarousel component

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
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#work" onClick={closeMenu}>
            WORK
          </a>
          <a href="#brand" onClick={closeMenu}>
            NEED BRAND
          </a>
          <a href="#influencer" onClick={closeMenu}>
            NEED INFLUENCER
          </a>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
          <button className="connect-button" onClick={closeMenu}>
            Let's Connect
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
      <div className="main-content">
        <h1>
          Get Real <span className="highlight">ROI</span> From{" "}
          <span className="highlight">Influencer</span> Marketing
        </h1>
        <p>
          A good design is not only aesthetically pleasing, but also functional.
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
