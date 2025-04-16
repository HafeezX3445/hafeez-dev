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
  // { name: "Asp .Net Core Web", icon: "/icons/react.png" },
  // { name: "React Native", icon: "/icons/react.png" },
  // { name: "Node.js", icon: "/icons/react.png" },
  // { name: "Node.js", icon: "/icons/react.png" },
];

const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="skills-section" ref={ref}>
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
