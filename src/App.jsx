import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <div className="main-container">

        <div className="main-content">

          <div className="typewriter">
            <h1>Hello! I'm <span className="my-name">Sam</span>.</h1>
          </div>

          <div className="hero-elements">
          <p className="hero-text">I am a Software Engineer who loves forging
          great programming solutions and exploring new technologies. Welcome to
          my portfolio website.</p>
          <img className="hero-pic" src="src/assets/me.png"></img>
          </div>
          <section className="about-me-section">
            <h3>About Me</h3>
            <p>This is where I will explain all about me and my programming journey</p>

          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
