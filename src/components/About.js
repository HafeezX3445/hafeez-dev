import React from "react";
import "../styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src="/icons/about.png" alt="Profile" className="profile-img" />
        <h2 className="about-name">Hafeez Shaik</h2>

        <div className="about-details">
          <p>
            <i className="fas fa-briefcase"></i>.Net | React | Azure | SQL
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Bangalore
          </p>
        </div>

        <p className="about-description">
          Passionate Software Engineer and tech enthusiast with 3 years of
          experience working as a Full Stack Developer. Skilled in building
          robust web applications using .NET Core and React, with hands-on
          experience in deploying and managing solutions on Microsoft Azure.
          Committed to writing clean, scalable code and staying updated with the
          latest in technology.
        </p>

        <div className="about-buttons">
          <button className="btn primary">Get In Touch</button>
          <button className="btn outline">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
