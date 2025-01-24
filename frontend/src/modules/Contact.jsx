import React from "react";
import "./Contact.css";
import bg from "../assets/others/contact.jpg";
import trial from "../assets/trial.png";
import money from "../assets/money.png";
import brain from "../assets/brain.png";

const ProgramCard = ({ icon, title, description }) => (
  <div className="program-card">
    <div className="icon">
      <img src={icon} alt={`${title} Icon`} className="program-icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="learn-more">Learn More</button>
  </div>
);

function Contact() {
  const programs = [
    {
      icon: money,
      title: "SSIP Program",
      description: "Get up to 2.5 Lacs for project and startup.",
    },
    {
      icon: brain,
      title: "IPR Support",
      description: "Intellectual Property Rights Support.",
    },
    {
      icon: money,
      title: "Nodal Program",
      description: "Support up to INR 30 lakhs.",
    },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/gsfcuniversity" },
    {
      name: "Youtube",
      url: "https://www.youtube.com/c/GSFCUniversityOfficial",
    },
    { name: "Twitter", url: "https://x.com/GSFCUniversity" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/guiitarcouncil/",
    },
    { name: "Instagram", url: "https://www.instagram.com/gsfcuniversity" },
  ];

  return (
    <>
      <div className="mainabout">
        <div className="img-container">
          <img src={bg} alt="About GUIITAR" className="funding-image" />
          <div className="funding-text-overlay">Contact Us</div>
        </div>
      </div>

      <div className="contact-card-container">
      <div className="contact-card-address">
        <h4>Office Address</h4>
        <p>Event Room, Second Floor,</p>
        <p>Anviksha - GSFC University,</p>
        <p>Vadodara, Gujarat - 391750, India</p>
      </div>
      <div className="contact-card-details">
        <p><strong>Mr. Kiran Parmar</strong></p>
        <p>Sr. Manager, GUIITAR COUNCIL</p>
        <p>+91 9313262712</p> 
        <p>Email: <a href="mailto:guiitar@gsfcuniversity.ac.in">guiitar@gsfcuniversity.ac.in</a></p>
      </div>
      <div className="contact-card-email">
       
      </div>
    </div>

      <div className="follow-us-section">
        <div className="follow-us-content">
          <h1 className="follow-us-title">Follow us on Social Media</h1>
          <ul className="contact-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="follow-us-image">
          <img src={trial} alt="Social gathering" />
        </div>
      </div>

      <div className="form-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29514.989203451187!2d73.14472959999999!3d22.377267200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc97b15555555%3A0x86e6773a36e1a153!2sGSFC%20University!5e0!3m2!1sen!2sin!4v1737613685120!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }} // Fix here
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="feedback-container">
          <h2 className="feedback-title">Get Involved with Us</h2>
          <form className="feedback-form" aria-label="Feedback Form">
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              aria-label="Your Email"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="textarea-field"
              aria-label="Your Message"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
