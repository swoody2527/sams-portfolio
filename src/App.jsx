import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useInView } from "react-intersection-observer";

function App() {
  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: true,
  });

  const [skillsetRef, skillsetInView] = useInView({
    triggerOnce: true,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
  });

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
               A <span style={{ color: "white" }}>Full-Stack Software Engineer</span>{" "}
              who loves forging great programming solutions and exploring new
              technologies. Welcome to my portfolio website.
            </p>
          </div>
          <button className="cv-btn">My CV</button>
          <a href="#skillset" className="arrow down"></a>
        </div>
        <div className="main-content" id="skillset">
          <div className="skillset-elements" ref={skillsetRef}>
            <div className="typewriter">
              <h2 className={skillsetInView ? "animate" : ""}>Skillset</h2>
            </div>
            <p className="skillset-text">
              I am a Software Engineer who loves forging great programming
              solutions and exploring new technologies. Welcome to my portfolio
              website.
            </p>
          </div>
          <a href="#projects" className="arrow down"></a>
        </div>
        <div className="main-content" id="projects">
          <div className="projects-elements" ref={projectsRef}>
            <div className="typewriter">
              <h2 className={projectsInView ? "animate" : ""}>Projects</h2>
            </div>
            <p className="projects-text">
              Here will be all my projects.
            </p>
          </div>
          <a href="#about-me" className="arrow down"></a>
        </div>
        <div className="main-content" id="about-me">
          <div className="about-me-elements" ref={aboutMeRef}>
            <div className="typewriter">
              <h2 className={aboutMeInView ? "animate" : ""}>About Me.</h2>
            </div>
            <img className="hero-pic" src="src/assets/me.png"></img>

            <p style={{color: "white"}} className="about-me-text">
              Hello there! I'm Sam Woodall, a Software Devloper based in West
              Sussex, UK. For me, the joy in coding stems from the continual
              problem solving required to create great code. Breaking down
              problems, solving them piece by piece and then scaling them back
              up to the point where you can step back to look at a functioning
              tangible creation, I find, is immensily satisfying. The fact that
              there is never one road to a solution with coding continually
              makes the experience exciting and opens up endless oppurtunities
              to learn and expand my skillset. I am commited to the endless learning
              journey that comes with a career in Software Development and I am
              eager to continue to learn and create fantastic programming solutions.
            </p>

            <p style={{color: "white"}} className="about-me-text">
              Outside of coding, I like to keep up with my personal fitness
              through weightlifting and running. I also love foreign language
              learning and have been studying Korean as my focus, both formally and self study,
              for around 7 years now.
            </p>
          </div>
          <a href="#contact-me" className="arrow down"></a>
        </div>
        <div className="main-content" id="contact-me">
          <div className="contact-elements" ref={contactRef}>
            <div className="typewriter">
              <h2 className={contactInView ? "animate" : ""}>Contact Me</h2>
            </div>
            <p className="contact-text">
              Please use the below form to get in contact. Alternatively use the
              LinkedIn Icon to contact me there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
