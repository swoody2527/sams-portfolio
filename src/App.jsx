import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useInView } from "react-intersection-observer";
import ContactForm from "./components/ContactForm";
import projectsInfo from "./projects-info";

function App() {
  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: true,
  });

  const [skillsetRef, skillsetInView] = useInView({
    triggerOnce: true,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
  });


  return (
    <div className="app-container">
      <NavBar></NavBar>
      <div className="main-container" id="landing-page">
        <div className="main-content-hero">
          <div className="typewriter">
            <h1>
              Hello! I'm <span className="my-name">Sam.</span>
            </h1>
          </div>
          <div className="hero-elements">
            <p className="hero-text">
              A{" "}
              <span style={{ color: "white" }}>
                Full-Stack Software Engineer
              </span>{" "}
              bringing ideas to life through code and creative problem-solving.
            </p>
          </div>
          <a target="_blank" href="assets/Sam Woodall - CV.pdf"><button className="cv-btn">Resume / CV</button></a>
        </div>

        <div className="main-content" id="skillset">
          <div className="skillset-elements" ref={skillsetRef}>
            <div className="typewriter">
              <h2 className={skillsetInView ? "animate" : ""}>Skillset</h2>
            </div>
            <a href="#projects" className="arrow down"></a>
          </div>
          <div className="skills-container">
            <div className="skill">
              <img src="assets/javascript-js.svg"></img>
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="assets/590px-Node.js_logo.svg.png"></img>
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="assets/express_logo.png"></img>
              <p>Express</p>
            </div>
            <div className="skill">
              <img src="assets/Python_logo_01.svg"></img>
              <p>Python</p>
            </div>
            <div className="skill">
              <img src="assets/Jest.svg"></img>
              <p>Jest</p>
            </div>
            <div className="skill">
              <img src="assets/firebase.svg"></img>
              <p>Firebase</p>
            </div>
            <div className="skill">
              <img src="assets/Postgresql_elephant.svg.png"></img>
              <p>PSQL</p>
            </div>
            <div className="skill">
              <img src="assets/html5.png"></img>
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="assets/CSS3_logo.svg.png"></img>
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="assets/react.svg"></img>
              <p>React</p>
            </div>
          </div>

          <div className="skills-container">
            <div className="skill">
              <img src="assets/programming.png"></img>
              <p>Paired Programming</p>
            </div>
            <div className="skill">
              <img src="assets/scrum.png"></img>
              <p>SCRUM & Agile</p>
            </div>
            <div className="skill">
              <img src="assets/team.png"></img>
              <p>Group Collaboration</p>
            </div>
          </div>
        </div>

        <div className="main-content" id="projects">
          <div className="projects-elements" ref={projectsRef}>
            <div className="typewriter">
              <h2 className={projectsInView ? "animate" : ""}>Projects.</h2>
            </div>
            <a href="#about-me" className="arrow down"></a>
            <div className="project-list">
              {projectsInfo.map((project) => {
                return (
                  <div className="project-container">
                    <h3>{project.name}</h3>
                    <div className="project-content">
                      <img
                        className="project-img"
                        src={project.projectImg}></img>
                      <p>{project.info}</p>
                      {project.name === "NC News API" ? <p style={{ color: "Yellow" }}>Please note
                        NC News API is hosted for free on Render, it may require 30 seconds to spin up,
                        and a refresh!</p> : null}
                    </div>
                    <div className="project-footer">
                      <div className="tech-stack">
                        {project.techStackImgs.map((img) => {
                          return <img src={img}></img>;
                        })}
                      </div>
                      <a
                        target="_blank"
                        href={project.repoUrl}
                        className="cv-btn"
                        style={{ fontSize: "30px" }}>
                        View Repo
                      </a>
                      {project.altUrl ?
                        <a
                          href={project.altUrl[1]}
                          target="_blank"
                          className="cv-btn" style={{ fontSize: "30px" }}>
                          {project.altUrl[0] === "video" ? "Demo Video" : "Live Site"}
                        </a>
                        : null}

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="main-content" id="about-me">
          <div className="about-me-elements" ref={aboutMeRef}>
            <div className="typewriter">
              <h2 className={aboutMeInView ? "animate" : ""}>About Me.</h2>
            </div>
            <a href="#contact-me" className="arrow down"></a>
            <img className="hero-pic" src="assets/me.png"></img>
            <div className="long-short-toggle">
            </div>

            <p className="about-me-text">
              Hi, I'm Sam Woodall, a Software Developer based in West Sussex, UK.

              What I love most about coding is the problem-solving—taking something complex, 
              breaking it down into smaller challenges, and then bringing 
              it all back together into a working solution. There's something really 
              satisfying about seeing an idea come to life through code.

              I'm excited by the challenge of learning and always looking for new ways 
              to expand my skills. Whether it's tackling new technologies 
              or refining existing ones, I'm excited to keep growing and 
              building software that makes a difference.
            </p>

            <p className="about-me-text">
              Outside of coding, I like to keep up with my personal fitness
              through weightlifting and running. I also love foreign language
              learning and have been studying Korean as my focus for around
              7 years now.
            </p>

            <p className="about-me-text">Thank you for taking the time to look at my portfolio website!</p>
          </div>
        </div>
        <ContactForm></ContactForm>
        <div className="contact-details">
          <div className="contact-me-email">
            <img src="assets/icons8-email-48.png"></img>
            <p>swoodall2527@gmail.com </p>
          </div>
          <div className="contact-me-socials">
            <a href="https://github.com/swoody2527" target="_blank" rel="noopener noreferrer">
              <img className="github-img" src="assets/github-logo.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/sam-woodall-41790128b/" target="_blank" rel="noopener noreferrer">
              <img src="assets/linkedin-white.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
