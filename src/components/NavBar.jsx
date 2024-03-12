import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#landing-page" className="site-title">
        Sam Woodall
      </a>
      <ul>
        <div className="nav-links">
        <li>
          <a href="#skillset">Skillset</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        </div>
        <div className="nav-images">
          <li>
            <a href="https://github.com/swoody2527" target="_blank">
              <img
                className="github-img"
                src="src/assets/github-logo.png"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sam-woodall-41790128b/" target="_blank">
              <img src="src/assets/In-White-40-Γö¼┬½.png"></img>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
