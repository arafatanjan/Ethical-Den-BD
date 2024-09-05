import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import img29 from "../../assets/Logo (1).png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src={img29} alt="Northway Global Logo" className="footer-logo" />
          <p style={{color:'white'}}>Travel Blog Elementor Template Kit. Powered by Design8. All rights reserved.</p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className="footer-section">
          <h4>Category</h4>
          <ul>
            <li>Immigration</li>
            <li>Study Abroad</li>
            <li>Uncategorized</li>
            <li>Scholarship</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Latest Post</h4>
          <ul>
            <li>Study in China</li>
            <li>Ulbright Scholarships in China</li>
            <li>How to Apply to Foreign Universities</li>
          </ul>
        </div>
        <div className="footer-section" style={{color:'white'}}>
          <h4 style={{color:'white'}}>Contact Us</h4>
          <p style={{color:'white'}}>
            <FaMapMarkerAlt className="footer-icon" /> Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)
          </p>
          <p style={{color:'white'}}>
            <FaPhoneAlt className="footer-icon" /> +880 1607-002687
          </p>
          <p style={{color:'white'}}>
            <FaEnvelope className="footer-icon" style={{color:'white'}} /> info@northwayglobal.com.bd
          </p>
        </div>
      </div>
      <div className="footer-bottom" style={{color:'white'}}>
        <p style={{color:'white'}}>Designed and Developed By Ethical Den</p>
      </div>
    </footer>
  );
};

export default Footer;
