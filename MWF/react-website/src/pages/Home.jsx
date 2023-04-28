import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Home Component
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
        
    </div>
  )
}

export default Home;