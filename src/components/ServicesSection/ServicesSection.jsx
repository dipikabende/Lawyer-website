import { Link } from "react-router";

import "./ServicesSection.css";


const services = [
  {
    title: "Civil Law",
    text: "Property disputes, family matters, injunctions and more.",
    icon: "⚒"
  
  },

  {
    title: "Criminal Law",
    text: "Defense, bail, FIR, legal representation and more.",
    icon: "♧"
   
  
  },

  {
    title: "Corporate Law",
    text: "Business registration, agreements, compliance and more.",
    icon: "▤"
   
  },

  {
    title: "Family Law",
    text: "Divorce, maintenance, custody, marriage registration and more.",
    icon: "♧"
  },

  {
    title: "Property Law",
    text: "Land disputes, title verification, real estate matters and more.",
    icon: "▱"
  },

  {
    title: "Legal Consultation",
    text: "Get expert advice for your legal queries and issues.",
    icon: "♢"
  }
];


function ServicesSection() {

  return (
    <section className="services-section">

      <div className="services-container">

        <div className="section-label">
          OUR SERVICES
          <span></span>
        </div>


        <h2>
          We Provide Comprehensive
          <br />
          Legal Solutions
        </h2>


        <p className="services-description">
          From legal advice to case representation,
          we are here to assist you in every step
          of your legal journey.
        </p>


        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.title}
            >

              <div className="service-icon">
                {service.icon}
          
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

              <Link to="/services">
                Know More →
              </Link>

            </div>

          ))}

        </div>


        {/* View all */}

        <div className="services-button">

          <Link to="/services">
            View All Services →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;