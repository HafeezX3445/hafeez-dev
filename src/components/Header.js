import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      <Link to="/" className="brand-name">
        <span>Hafeez Shaik</span>
      </Link>

      <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="/about"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/icons/about.png" alt="About" className="nav-icon" /> ABOUT
        </Link>
        <Link
          to="/skills"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/icons/skills.png" alt="Skills" className="nav-icon" />{" "}
          SKILLS
        </Link>
        <Link
          to="/experience"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/icons/experience.png"
            alt="Experience"
            className="nav-icon"
          />{" "}
          EXPERIENCE
        </Link>
        <Link
          to="/education"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/icons/education.png"
            alt="Education"
            className="nav-icon"
          />{" "}
          EDUCATION
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/icons/projects.png" alt="Projects" className="nav-icon" />{" "}
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/icons/contact.png" alt="Contact" className="nav-icon" />{" "}
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
