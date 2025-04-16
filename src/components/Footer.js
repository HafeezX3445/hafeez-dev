import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="about-socials">
        <i className="fas fa-envelope"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-skype"></i>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Hafeez Shaik. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
