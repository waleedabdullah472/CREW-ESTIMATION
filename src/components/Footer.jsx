import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/blogo.png" alt="Company Logo" />
          </div>
          <p>
            We provide top-quality estimation and construction services with
            trust, professionalism, and accuracy. Building the future with
            precision and dedication.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <div className="footer-column">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/cost-estimation">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faqs/refund-policy">FAQs</Link></li>
            </ul>
          </div>

          {/* ✅ New Quick Links Row */}
          <div className="footer-column quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/estimating-fee">Estimating Fee</Link></li>
              <li><Link to="/faqs/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/faqs/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/faqs/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>📞 +17869870481</p>
          <p>✉️ info@pgrgame.com</p>
          <p>📍 Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2004 PGR Game. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
