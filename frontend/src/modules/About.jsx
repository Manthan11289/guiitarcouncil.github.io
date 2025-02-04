import "./About.css";
import TabbedAboutTeam from "./TabbedAboutTeam";
import image from "../assets/others/campus.jpg";
import headerImage from "../assets/others/contact.jpg";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function About() {
  

  return (
    <div className="mainabout">
      <div className="img-container">
        <img src={headerImage} alt="About GUIITAR" className="funding-image" />
        <div className="funding-text-overlay">About GUIITAR Council</div>
      </div>

      <div className="about-content">
        <div className="about-container">
          <div className="about-content">
            <h2>About US</h2>
            <p>
              GU Incubation Innovation Technology and Applied Research (GUIITAR)
              Council has been established by GSFC University (GSFCU) at
              Vadodara, dedicated to promote and support creativity, innovation
              and spirit of enterprise among young minds and innovators. GUIITAR
              Council is registered under section 8 of Companies Act, 2013.
            </p>
            <p>
              GUIITAR Council is committed to nurture and develop startups
              through shared resources, infrastructure, cutting-edge
              laboratories, tailored mentorship, extended networking, and other
              common services such as co-working space, equipment, business
              support, and intellectual property protection.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our aim is to establish global gold standards for innovation and
              entrepreneurship. By providing unparalleled support, resources,
              and opportunities, we want to create an environment where every
              startup can thrive, disrupt, and redefine industry norms.
            </p>
          </div>

          <div className="about-image">
            <img src={image} alt="GUIITAR Image" />
          </div>
        </div>

        <div id="leadership" className="message-section">
          <h2>Message From Leadership</h2>

          <div className="message-container">
            {/* President's Message */}
            <div className="message-item">
              <p>
                "Every great innovation starts with a single spark of curiosity.
                In the world of startups, it's not the resources you have, but
                the relentless pursuit of your vision that turns ideas into
                reality."
              </p>
              <p className="message-author">
                - Mr. Bimal Bhayani <br />
                CEO, GUIITAR
              </p>
            </div>
            <div className="message-item">
              <p>
                "Create an environment of excellence through innovation for you
                will forever be remembered for your contribution to the world.
                Innovation is a journey in which you have to say no to thousands
                of things which already exist while embracing the one which is
                yet to come."
              </p>
              <p className="message-author">
                - Shri P. K. Taneja, IAS (Retd.) <br></br>
                Chairman, GUIITAR
              </p>
            </div>

            {/* CEO's Message */}

            {/* Provost's Message */}
            <div className="message-item">
              <p>
                "Innovation is not to repeat a success story but to celebrate a
                failure. Pick-up and never Give-up is an attitude towards
                innovation."
              </p>
              <p className="message-author">
                - Dr. G. R. Sinha <br /> Provost, GSFC University
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 id="leadership" >Meet our Leadership</h2>
          <TabbedAboutTeam />
        </div>
      </div>
    </div>
  );
}

export default About;
