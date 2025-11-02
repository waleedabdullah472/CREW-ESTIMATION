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
            <img src="/logo_black.png" alt="Company Logo" />
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
          {/* WhatsApp Link */}
          <p>
            📞{" "}
            <a
              href="https://wa.me/17869870481"
              target="_blank"
              rel="noopener noreferrer"
            >
              +17869870481
            </a>
          </p>

          {/* Gmail Link */}
          <p>
            ✉️{" "}
            <a
              href="owen@crew-estimation.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              owen@crew-estimation.com
            </a>
          </p>

          <p>📍 Florida, USA </p>
        </div>
      </div>

      {/* Footer Bottom - Modified structure */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <p>© 2025 <span className="crew">CREW ESTIMATION</span>. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-right">
            {/* 5 Small Pictures */}
            <img src="/payment.png" alt="icon1" />
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;