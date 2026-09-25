
import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Atharva Associate" />  
        </NavLink>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>

          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </nav>


        {/* Desktop Consultation Button */} 
        <NavLink to="/contact" className="consultation-btn" > 
        Get Consultation
         </NavLink>



        {/* Hamburger Icon */}
        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          // aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <nav className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
