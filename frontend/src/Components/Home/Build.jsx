import "./Build.css";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const moneyIcon = "/Assets/others/money.png";
const urbanIcon = "/Assets/others/urban.png";
const communityIcon = "/Assets/others/community.png";
const brainIcon = "/Assets/others/brain.png";

const Build = () => {
  return (
    <section className="build-the-future">
      <h1 className="section-title">
        <u>Build the future with us</u>
      </h1>
      <div className="offerings">
        <div className="offering">
          <img src={moneyIcon} alt="Funding" className="icon" />
          <h2>Funding</h2>
          <p>
            Get access to financial support to turn your innovative ideas into
            reality.
          </p>
          <HashLink
            smooth
            to="/funding#funding-image"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="offering-button">Learn More</button>
          </HashLink>
        </div>
        <div className="offering">
          <img src={urbanIcon} alt="Infrastructure" className="icon" />
          <h2>Infrastructure</h2>
          <p>
            Work in state-of-the-art facilities designed for collaboration and
            growth.
          </p>
          <HashLink
            smooth
            to="/about#infra"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="offering-button">Learn More</button>
          </HashLink>
        </div>
        <div className="offering">
          <img src={communityIcon} alt="Mentorship" className="icon" />
          <h2>Mentorship</h2>
          <p>
            Learn from leading industry experts to sharpen your strategies and
            skills.
          </p>
          <HashLink
            smooth
            to="/about#leadership"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="offering-button">Learn More</button>
          </HashLink>
        </div>
        <div className="offering">
          <img src={brainIcon} alt="IPR Support" className="icon" />
          <h2>IPR Support</h2>
          <p>
            Protect your ideas and innovations with intellectual property rights
            assistance.
          </p>
          <a
            href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="offering-button">Learn More</button>
          </a>
        </div>
      </div>
      <div className="apply-section">
        <h2 className="apply-title">Take the first step towards greatness!</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="apply-button">Apply Now!</button>
        </a>
      </div>
    </section>
  );
};

export default Build;
