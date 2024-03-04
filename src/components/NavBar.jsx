import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        Sam Woodall
      </a>
      <ul>
        <div className="nav-links">
        <li>
          <a href="/about-me">About Me</a>
        </li>
        <li>
          <a href="/">Skillset</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact Me</a>
        </li>
        </div>
        <div className="nav-images">
          <li>
            <a href="/">
              <img
                className="github-img"
                src="src/assets/github-logo.png"></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="src/assets/In-White-40-Γö¼┬½.png"></img>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
