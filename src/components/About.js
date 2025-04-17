import React, { useState, useEffect } from "react";
import "../styles.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send("service_rzfhded", "template_96f7aga", form, "5gT1xjaankkhayQ5R")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Inquiry sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, try again later.");
          setIsSending(false);
        }
      );
  };

  //template_96f7aga
  useEffect(() => {
    const modal = document.getElementById("inquiryModal");
    const resetForm = () => {
      setForm({ name: "", email: "", message: "" });
    };

    modal?.addEventListener("show.bs.modal", resetForm);

    // Cleanup event listener
    return () => {
      modal?.removeEventListener("show.bs.modal", resetForm);
    };
  }, []);

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
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#inquiryModal"
          >
            Get In Touch
          </button>
          <button className="btn btn-outline-secondary">Download CV</button>
        </div>
      </div>

      <div
        className="modal fade"
        id="inquiryModal"
        tabIndex="-1"
        aria-labelledby="inquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="inquiryModalLabel">
                  Contact
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default About;
