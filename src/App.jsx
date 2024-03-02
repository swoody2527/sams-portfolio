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
            <h1>Hello! I'm Sam :) </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
