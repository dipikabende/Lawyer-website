
import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  // Input value handle karna
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  // Form submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyTiZ9TTGvb8jn2qg8dn-JsbsVe8eyjXwXS2f5UwnwHVsxgsQpx5wCjIxrHG0TtTNzt/exec",
        {
          method: "POST",

          body: JSON.stringify(formData),
        }
      );


      const result = await response.json();

      console.log(result);


      if (result.success) {

        alert("Message submitted successfully!");

        // Form clear
        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        alert("Something went wrong!");

      }

    } catch (error) {

      console.error("Error:", error);

      alert("Unable to submit message. Please try again.");

    } finally {

      setLoading(false);

    }

  };


  return (
    <main className="contact-page">

      <section className="contact-page-header">

        <span>GET IN TOUCH</span>

        <h1>
          Contact Us
        </h1>

        <p>
          Have a legal query or need assistance?
          Feel free to reach out.
        </p>

      </section>


      <section className="contact-container">


        {/* Information */}

        <div className="contact-information">

          <h2>
            Let's Talk
          </h2>


          <div className="contact-item">

            <span>☎</span>

            <div>

              <small>Phone</small>

              <a href="tel:+918007022220">
                +91 8007022220
              </a>

            </div>

          </div>


          <div className="contact-item">

            <span>✉</span>

            <div>

              <small>Email</small>

              <a href="mailto:advmangeshpanbude@gmail.com">
                advmangeshpanbude@gmail.com
              </a>

            </div>

          </div>


          <div className="contact-item">

            <span>⌖</span>

            <div>

              <small>Address</small>

              <p>
                145, Government Press Society,
                <br />
                Dabha, Nagpur 440023
              </p>

            </div>

          </div>

        </div>


        {/* Form */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Send Us a Message
          </h2>


          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />


          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />


          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            required
          />


          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Send Message →"}
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contact;

