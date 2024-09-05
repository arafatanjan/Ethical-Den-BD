import React from 'react';
import "./Navbar.css"
import img3 from "../../assets/Logo (1).png";

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
          <img src={img3} alt="Northway Global" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li>
            <a href="#" className="dropdown" style={{color:'#f97316'}}>Study Destinations </a>
          </li>
          <li>
            <a href="#" className="dropdown">Gallery</a>
          </li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <div className="enquire-button">
          <a href="#">Enquire Now <span className="arrow">→</span></a>
        </div>
      </nav>
    );
};

export default Navbar;