import { Link } from "react-router";

import "./Footer.css";

import logo from "../../assets/logo.png";
import {Scale} from "lucide-react"

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">
        
                  <Link to="/" className="footer-detail">
          <img
            src={logo}
            alt="Atharva Associate"
          />
          {/* <Scale size={40} className="scale-icon" /> */}
          <div className="footer-text">
           <h4>ATHARVA ASSOCIATEE</h4>
          <p>Adv.mangesh R. Panbude</p>
          <span>B.Com,MBA,LLB</span>
         </div>
        </Link>
        
      
      


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        <div className="social-links">

          <a href="https://github.com/elvrixtechsolutions"><i class="ri-github-fill"></i></a>

          <a href="https://www.instagram.com/elvrix_techsolutions?stkn=MWtyZTJvd3dwYzF0Yw=="><i class="ri-instagram-line"></i></a>

          <a href="https://www.linkedin.com/company/elvrix-techsolutions/"><i class="ri-linkedin-fill"></i></a>

        </div>

      </div>


      <p className="copyright">
        © 2025 Atharva Associate. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;