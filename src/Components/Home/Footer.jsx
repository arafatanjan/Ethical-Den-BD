import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/src/assets/Logo (1).png" alt="Northway Global Logo" className="footer-logo" />
          <p>Travel Blog Elementor Template Kit. Powered by Design8. All rights reserved.</p>
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
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> +880 1607-002687
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> info@northwayglobal.com.bd
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed and Developed By Ethical Den</p>
      </div>
    </footer>
  );
};

export default Footer;
