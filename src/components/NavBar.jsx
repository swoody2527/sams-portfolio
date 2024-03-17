import React, { useState } from 'react';
import '../styles/NavBar.css'; // Assuming you have a CSS file for NavBar styles

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <a href="#landing-page" className="site-title">
        Sam Woodall
      </a>
      <a href="#landing-page" className="site-title-vertical">
        <span>Sam</span>
        <span>Woodall</span>
      </a>
      <div className={`menu-toggle ${showNav ? 'open' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`dropdown-menu ${showNav ? 'show' : ''}`}>
        <li><a href="#skillset">Skillset</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#contact-me">Contact Me</a></li>
      </ul>
      <div className="nav-images">
        <a href="https://github.com/swoody2527" target="_blank" rel="noopener noreferrer">
          <img className="github-img" src="assets/github-logo.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/sam-woodall-41790128b/" target="_blank" rel="noopener noreferrer">
          <img src="assets/In-White-40-Γö¼┬½.png" alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
