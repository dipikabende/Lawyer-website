import { Link } from "react-router";

import "./AboutSection.css";
import {UserRoundGroup} from "lucide-react"

import aboutImage from "../../assets/about.png";

function AboutSection() {

  return (
    <section className="about-section">

      <div className="about-container">


        {/* Content */}

        <div className="about-content">

          <div className="section-label">
            ABOUT US
            <span></span>
          </div>


          <h2>
            Committed to Justice,
            <br />
            Driven by Your Trust
          </h2>


          <p>
            At Atharva Associate, we believe in providing
            honest, practical and result-oriented legal
            solutions. Our goal is to protect your rights,
            stand by your side and ensure that you get the
            best possible representation and guidance.
          </p>


          <div className="about-features">

            <div>
              <span>♢</span>
              <h4>Professional</h4>
              <p>Approach</p>
            </div>

            <div>
              <span>♧</span>
              {/* <span><UserRoundGroup  /></span> */}
              <h4>Client</h4>
              <p>Focused</p>
            </div>

            <div>
              <span>⚖</span>
              <h4>Integrity &</h4>
              <p>Confidentiality</p>
            </div>

            <div>
              <span>☆</span>
              <h4>Years of</h4>
              <p>Experience</p>
            </div>

          </div>


          <Link
            to="/about"
            className="learn-more-btn"
          >
            Learn More 
               <span></span>
          </Link>

        </div>


        {/* Image */}

        <div className="about-image">

          <img
            src={aboutImage}
            alt="Justice"
          />

        </div>

      </div>

    </section>
  );
}

export default AboutSection;