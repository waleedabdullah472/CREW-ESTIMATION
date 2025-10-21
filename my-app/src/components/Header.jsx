import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Top Contact Bar - Smaller */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span className="contact-item">
              <FaPhone className="contact-icon" />
              <strong>+17869870481</strong>
            </span>
            <span className="contact-item">
              <FaEnvelope className="contact-icon" />
              <strong>owen@crew-estimation.com</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Navbar - Larger */}
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeAll}>
          <img src="/logo.png" alt="Company Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeAll}>Home</Link>
          </li>

          {/* Services Dropdown */}
          <li className={`dropdown ${openDropdown === 'services' ? 'active' : ''}`}>
            <span onClick={() => toggleDropdown('services')}>Services ▾</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/cost-estimation" onClick={closeAll}>Cost Estimation</Link>
              </li>
              <li>
                <Link to="/services/material-takeoff" onClick={closeAll}>Quality & Material Takeoff</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/estimating-fee" onClick={closeAll}>Estimating Fee</Link>
          </li>

          {/* FAQS*/}
          <li className={`dropdown ${openDropdown === 'faqs' ? 'active' : ''}`}>
            <span onClick={() => toggleDropdown('faqs')}>FAQs ▾</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/faqs/refund-policy" onClick={closeAll}>Refund Policy</Link>
              </li>
              <li>
                <Link to="/faqs/privacy-policy" onClick={closeAll}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faqs/terms-conditions" onClick={closeAll}>Terms & Conditions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/review" onClick={closeAll}>Reviews</Link>
          </li>
          
          <li>  
            <Link to="/contact" onClick={closeAll}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;