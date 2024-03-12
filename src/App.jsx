import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useInView } from "react-intersection-observer";
import ContactForm from "./components/ContactForm";

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

  const images = ["src/assets/me.png","src/assets/CSS3_logo.svg.png","src/assets/javascript-js.svg"]

  return (
    <div className="app-container">
      <NavBar></NavBar>
      <div className="main-container" id="landing-page">
        <div className="main-content-hero">
          <div className="typewriter">
            <h1>
              Hello! I'm <span className="my-name">Sam</span>.
            </h1>
          </div>
          <div className="hero-elements">
            <p className="hero-text">
              A{" "}
              <span style={{ color: "white" }}>
                Full-Stack Software Engineer
              </span>{" "}
              who loves forging great programming solutions and exploring new
              technologies. Welcome to my portfolio website.
            </p>
          </div>
          <button className="cv-btn">Resume / CV</button>
          <a href="#skillset" className="arrow down"></a>
        </div>

        <div className="main-content" id="skillset">
          <div className="skillset-elements" ref={skillsetRef}>
            <div className="typewriter">
              <h2 className={skillsetInView ? "animate" : ""}>Skillset</h2>
            </div>
            <p className="skillset-text"></p>
          </div>
          <div className="skills-container">
            <div className="skill">
              <img src="src/assets/javascript-js.svg"></img>
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="src/assets/590px-Node.js_logo.svg.png"></img>
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="src/assets/express_logo.png"></img>
              <p>Express</p>
            </div>
            <div className="skill">
              <img src="src/assets/Python_logo_01.svg"></img>
              <p>Python</p>
            </div>
            <div className="skill">
              <img src="src/assets/Jest.svg"></img>
              <p>Jest</p>
            </div>
            <div className="skill">
              <img src="src/assets/firebase.svg"></img>
              <p>Firebase</p>
            </div>
            <div className="skill">
              <img src="src/assets/Postgresql_elephant.svg.png"></img>
              <p>PSQL</p>
            </div>
            <div className="skill">
              <img src="src/assets/html5.png"></img>
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="src/assets/CSS3_logo.svg.png"></img>
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="src/assets/react.svg"></img>
              <p>React</p>
            </div>
          </div>

          <div className="skills-container">
            <div className="skill">
              <img src="src/assets/programming.png"></img>
              <p>Paired Programming</p>
            </div>
            <div className="skill">
              <img src="src/assets/scrum.png"></img>
              <p>SCRUM & Agile</p>
            </div>
            <div className="skill">
              <img src="src/assets/team.png"></img>
              <p>Group Collaboration</p>
            </div>
          </div>
          <a href="#projects" className="arrow down"></a>
        </div>

        <div className="main-content" id="projects">
          <div className="projects-elements" ref={projectsRef}>
            <div className="typewriter">
              <h2 className={projectsInView ? "animate" : ""}>Projects.</h2>
            </div>
            <div className="project-list">
              <div className="project-container">
                <h3>PlayPal</h3>
                <div className="project-content">
                  <img
                    className="project-img"
                    src="src/assets/project-images/playpal-img.png"></img>
                    <p>
                      A fully fledged gaming social media application to connect
                      like-minded gamers. View information relating to your
                      favourite games and leave a user rating to connect with
                      others based on similar interests. Create chat rooms to
                      organise gaming sessions and book them in on a calender
                      system to view at any time.
                    </p>
                </div>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  View Repo
                </button>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  Hosted Site
                </button>
              </div>
              <div className="project-container">
                <h3>NC News</h3>
                <div className="project-content">
                  <img
                    className="project-img"
                    src="src/assets/project-images/nc-news-image.png"></img>
                  <p>
                    A community based news board where users can filter based on
                    rating, category, publish date to read up on current topics.
                    Upon creating an account, users can also leave ratings and
                    comments to express their opinion on certain articles. This
                    project makes use of the NC News API listed below.
                  </p>
                </div>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  View Repo
                </button>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  Hosted Site
                </button>
              </div>
              <div className="project-container">
                <h3>NC News API</h3>
                <div className="project-content">
                  <img
                    className="project-img"
                    src="src/assets/project-images/nc-news-api.png"></img>
                  <p>
                    Fully Tested REST API created to hook into a PSQL database
                    and utilise a multitude of endpoints to serve information
                    relating to published articles and users of the NC News
                    community news board.
                  </p>
                </div>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  View Repo
                </button>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  Hosted Site
                </button>
              </div>
              <div className="project-container">
                <h3>Repper</h3>
                <div className="project-content">
                  <img
                    className="project-img"
                    src="src/assets/project-images/repper.png"></img>
                  <p>
                    A fitness based web application designed to provide users
                    with a streamlined solution to tracking their current
                    weightlifting progress. Create a plan and track each day's
                    details such as exercises, weight, goal amount of reps and
                    previously achieved amount of reps. Based on the details you
                    provide, Repper will automatically adjust your plan when you
                    achieve your goals to keep you pushing harder.
                  </p>
                </div>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  View Repo
                </button>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  Hosted Site
                </button>
              </div>
              <div className="project-container">
                <h3>SubTrack</h3>
                <div className="project-content">
                  <img
                    className="project-img"
                    src="src/assets/project-images/sub-track.png"></img>
                  <p>
                    A desktop application created to help users keep track of
                    their outgoing subscriptions. When you sign up to a new
                    subscription based service, log its details and renewal date
                    in SubTrack so you can view all upcoming and recent charges
                    in one place.
                  </p>
                </div>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  View Repo
                </button>
                <button className="cv-btn" style={{ fontSize: "30px" }}>
                  Hosted Site
                </button>
              </div>
            </div>
          </div>
          <a href="#about-me" className="arrow down"></a>
        </div>

        <div className="main-content" id="about-me">
          <div className="about-me-elements" ref={aboutMeRef}>
            <div className="typewriter">
              <h2 className={aboutMeInView ? "animate" : ""}>About Me.</h2>
            </div>
            <img className="hero-pic" src="src/assets/me.png"></img>

            <p style={{ color: "white" }} className="about-me-text">
              Hello there! I'm Sam Woodall, a Software Devloper based in West
              Sussex, UK. For me, the joy in coding stems from the continual
              problem solving required to create great code. Breaking down
              problems, solving them piece by piece and then scaling them back
              up to the point where you can step back to look at a functioning
              tangible creation, I find, is immensily satisfying. The fact that
              there is never one road to a solution with coding continually
              makes the experience exciting and opens up endless oppurtunities
              to learn and expand my skillset. I am commited to the endless
              learning journey that comes with a career in Software Development
              and I am eager to continue to learn and create fantastic
              programming solutions.
            </p>

            <p style={{ color: "white" }} className="about-me-text">
              Outside of coding, I like to keep up with my personal fitness
              through weightlifting and running. I also love foreign language
              learning and have been studying Korean as my focus, both formally
              and self study, for around 7 years now.
            </p>
          </div>
          <a href="#contact-me" className="arrow down"></a>
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default App;
