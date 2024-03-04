import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <div className="main-container">

        <div className="main-content-hero">
        <div className="typewriter">
          <h1>
            Hello! I'm <span className="my-name">Sam</span>.
          </h1>
        </div>
          <div className="hero-elements">
            <p className="hero-text">
              I am a Software Engineer who loves forging great programming
              solutions and exploring new technologies. Welcome to my portfolio
              website.
            </p>
            <img className="hero-pic" src="src/assets/me.png"></img>
          </div>
          <button className="cv-btn">My CV</button>
        </div>
        <div className="main-content">
          <div className="about-me-elements">
            <p className="about-me-text">
              <h2>About Me</h2>
              I am a Software Engineer who loves forging great programming
              solutions and exploring new technologies. Welcome to my portfolio
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
