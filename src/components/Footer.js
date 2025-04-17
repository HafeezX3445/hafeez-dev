import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="about-socials">
        <a
          href="mailto:hafeezshaik245@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/9553882386"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+919553882386" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone fa-xs"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Hafeez Shaik. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
