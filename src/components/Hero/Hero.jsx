import { Link } from "react-router";
import {MoveRight} from "lucide-react"

import "./Hero.css";

import heroImage from "../../assets/hero.jpeg";


function Hero() {

  return (
    <section className="hero">

      <img
        src={heroImage}
        alt="Legal consultation"
        className="hero-image"
      />

      <div className="hero-overlay"></div>


      <div className="hero-content">

        <div className="hero-label">

          <span>YOUR RIGHTS</span>

          <span>OUR PRIORITY</span>

          <i></i>

        </div>


        <h1>
          ATHARVA ASSOCIATE
        </h1>


        <h2>
          Trusted Legal Guidance for a Better Tomorrow
        </h2>


        <p>
          We provide professional, reliable and
          result-oriented legal <br /> services to help you
          navigate through life's legal challenges <br />
          with confidence.
        </p>


        <div className="hero-buttons">

          <Link
            to="/contact"
            className="hero-primary-btn"
          >
            Book a Consultation
            <span><MoveRight /></span>
          </Link>


          <Link
            to="/services"
            className="hero-secondary-btn"
          >
            Our Services
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;