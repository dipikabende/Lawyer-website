// import { icons } from "lucide-react";
import "./Services.css";
import {
  Scale,
  Gavel,
  Building2,
  Users,
  House,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Civil Law",
    description:
      "Property disputes, injunctions, civil disputes and other matters."
  },

  {
      icon: Gavel,
    title: "Criminal Law",
    description:
      "Bail matters, FIR related assistance, defense and representation."
  },

  {
     icon: Building2,
    title: "Corporate Law",
    description:
      "Business agreements, registration and compliance related matters."
  },

  {
     icon: Users,
    title: "Family Law",
    description:
      "Divorce, maintenance, custody and marriage related matters."
  },

  {
       icon: House,
    title: "Property Law",
    description:
      "Land disputes, title verification and real estate matters."
  },

  {
     icon: MessageCircle,
    title: "Legal Consultation",
    description:
      "Professional consultation for your legal questions and concerns."
  }
];


function Services() {
 

  return (
    <main className="services-page">

      <section className="services-page-header">

        <span>OUR SERVICES</span>

        <h1>
          Comprehensive Legal Solutions
        </h1>

        <p>
          Professional legal services designed
          around your needs.
        </p>

      </section>


    <section className="services-page-grid">

  {services.map((service) => {
    
    const Icon = service.icon;

    return (
      <div
        className="services-page-card"
        key={service.title}
      >

        <div className="services-page-icon">
          <Icon size={40}/>
        </div>

        <h2>
          {service.title}
        </h2>

        <p>
          {service.description}
        </p>

      </div>
    );

  })}

</section>

    </main>
  );
}

export default Services;