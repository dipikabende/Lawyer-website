import Founder from "../../components/Founder/Founder";

import "./About.css";

function About() {

  return (
    <main className="about-page">

      {/* Page Header */}

      <section className="about-page-header">

        <span>ABOUT US</span>

        <h1>
          Committed to Justice,
          <br />
          Driven by Your Trust
        </h1>

        <p>
          Honest, practical and result-oriented
          legal solutions for our clients.
        </p>

      </section>


      {/* About Content */}

      <section className="about-page-content">

        <div>

          <h2>
            Professional Legal Support
          </h2>

          <p>
            At Atharva Associate, we are committed to
            providing professional legal guidance and
            representation to our clients.
          </p>

          <p>
            We understand that legal matters can be
            complicated and stressful. Our approach is
            focused on understanding every client's
            situation and providing practical solutions.
          </p>

        </div>

      </section>


      <Founder />

    </main>
  );
}

export default About;
