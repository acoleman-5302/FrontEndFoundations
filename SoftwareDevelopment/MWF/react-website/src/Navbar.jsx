import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li id="myName">
            <p>ANNA COLEMAN</p>
          </li>
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      {/* <footer className="footer">
        <div className="icon-container">
          <div className="icon-item">
              <a className="icon" href="https://github.com/acoleman-5302" ><i class="bi bi-2x bi-github"></i></a>
          </div>
          <div className="icon-item">
              <a className="icon" href="https://www.linkedin.com/in/anna-coleman-430b54267/"><i class="bi bi-linkedin"></i></a>
          </div>
          <div className="icon-item">
              <a className="icon" href="https://www.facebook.com/anna.coleman.353803/" ><i class="bi bi-facebook"></i></a>
          
          </div>
          <div className="icon-item">
              <a className="icon" href="https://www.instagram.com/annalucille._/"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div className="contact-container" >
          <div className="icon-item">
              <i className="bi bi-envelope-fill email contact" ></i>acoleman@seu.edu
          </div>
             
          <div className="icon-item">
                <i className="bi bi-telephone-fill phone contact"></i>(229)834-6319
          </div> 
        </div>

      </footer> */}
    </div>
  );
}

export default Navbar;

