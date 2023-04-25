import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return ( 
    <div>
        <div className="hero-container">
          <div className="hero-text">
            <h1>I am Anna Coleman</h1>
            <p>And I'm a Mathematician</p>
            <button className=" btn btn-secondary">{<Link style={{textDecoration: 'none', color:'white'}} to="/portfolio">See my work</Link>}</button>
          </div>
        </div>

        <div className="learn">
          <h3>Welcome to my page!</h3>
          <p>I am a pure mathematics major and this website was built during one of my Front End Development classes. I enjoy almost every subject, mostly proof heavy courses. My most recent studies have been on the continuum hypothesis by Georg Cantor. If interested, I have my paper linked below. For more profession information, take a quick look at my resume.</p>
          <button className="btn btn-secondary">See my Resume</button>
          <button className="btn btn-secondary">Continuum Hypothesis Paper</button>
        </div>
        
    </div>
  )
}

export default Home;