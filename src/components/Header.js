import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <span className="brand-name">Hafeez Shaik</span>
      <div className="header-content">
        <div className="nav-links">
          <Link to="/about" className="nav-link">
            <img src="/icons/about.png" alt="About" className="nav-icon" />{" "}
            ABOUT
          </Link>
          <Link to="/skills" className="nav-link">
            <img src="/icons/skills.png" alt="Skills" className="nav-icon" />{" "}
            SKILLS
          </Link>
          <Link to="/experience" className="nav-link">
            <img
              src="/icons/experience.png"
              alt="Experience"
              className="nav-icon"
            />{" "}
            EXPERIENCE
          </Link>
          <Link to="/education" className="nav-link">
            <img
              src="/icons/education.png"
              alt="Education"
              className="nav-icon"
            />{" "}
            EDUCATION
          </Link>
          <Link to="/projects" className="nav-link">
            <img
              src="/icons/projects.png"
              alt="Projects"
              className="nav-icon"
            />{" "}
            PROJECTS
          </Link>
          <Link to="/contact" className="nav-link">
            <img src="/icons/contact.png" alt="Contact" className="nav-icon" />{" "}
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
