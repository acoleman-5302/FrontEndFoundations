import React from "react";
import "./Home.css";

function Home() {
  return ( 
    <div>
        <div className="hero-container">
          <div className="hero-text">
            <h1>I am Anna Coleman</h1>
            <p>And I'm a Mathematician</p>
            <button onClick="window.location.href='./Portfolio.jsx'">See my work</button>
          </div>
        </div>

        <div className="learn">
          <h3>Learn More section</h3>
          <p>This is some more about me</p>
        </div>
        
    </div>
  )
}

export default Home;