import "./Founder.css";

import founderImage from "../../assets/founder.jpeg";

function Founder() {

  return (
    <section className="founder-section">

      <div className="founder-container">

        <div className="founder-image">

          <img
            src={founderImage}
            alt="Adv. Mangesh R. Panbude"
          />

        </div>


        <div className="founder-content">

          <div className="founder-label">
            OUR FOUNDER
            <span></span>
          </div>


          <h2>
            Adv. Mangesh R. Panbude
          </h2>


          <p>
            With a strong academic background in B.Com,
            MBA and LLB,  Adv. Mangesh R. Panbude brings
            a deep understanding of law, business and
            client needs. His dedication, experience and 
            professional approach help clients get the
            best legal support and guidance.
          </p>


          <blockquote>
            "Law is not just about winning cases, <br />
            it's about serving people."
          </blockquote>

        </div>

      </div>

    </section>
  );
}

export default Founder;