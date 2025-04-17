import React from "react";
import "../styles.css";

const skills = [
  { name: ".Net", icon: "/icons/dotnet.png" },
  { name: "Sql Server", icon: "/icons/sql.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JS", icon: "/icons/js.png" },
  { name: "React.js", icon: "/icons/react.png" },
  { name: "Azure", icon: "/icons/Azure.jfif" },
];

const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="skills-section" ref={ref}>
      <h2 className="section-title">SKILLS</h2>
      <div className="container">
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
            >
              <div className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
