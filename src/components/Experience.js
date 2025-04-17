import React from "react";

const experienceData = [
  {
    company: "Technoforte Software Pvt Ltd",
    role: "Software Engineer",
    duration: "Dec 2024 – Present",
    location: "Bengaluru, Karnataka, India • Hybrid",
  },
  {
    company: "Sigmoss Systems Pvt Ltd",
    role: "Junior Software Engineer",
    duration: "Feb 2023 – Dec 2024",
    location: "Bengaluru, Karnataka, India • On-Site",
  },
  {
    company: "XPAY TECHNOLOGIES",
    role: "Software Engineer Intern",
    duration: "Nov 2022 – Jan 2023",
    location: "Bengaluru, Karnataka, India • On-Site",
  },
];

const Experience = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fs-3 fs-md-2">Experience</h2>
      <div className="timeline position-relative ms-4">
        {experienceData.map((exp, index) => (
          <div
            className="timeline-item position-relative mb-4 ps-4"
            key={index}
          >
            <div
              className="position-absolute top-0 start-0 translate-middle bg-primary border border-light rounded-circle"
              style={{ width: "12px", height: "12px", zIndex: 1 }}
            ></div>
            <div className="card border-0">
              <div className="card-body ps-2 p-2 p-sm-3">
                <h5 className="fw-semibold mb-1 fs-6 fs-sm-5">{exp.company}</h5>
                <h6 className="text-muted mb-1 fs-6">
                  {exp.role} | {exp.duration}
                </h6>
                <p className="mb-0 fs-6">{exp.location}</p>
              </div>
            </div>
          </div>
        ))}
        <div
          className="position-absolute top-0 start-0 bg-secondary"
          style={{ width: "2px", height: "100%", left: "0.5rem", zIndex: 0 }}
        ></div>
      </div>
    </div>
  );
};

export default Experience;
