// Contect.jsx
import React from "react";
import "./Contact.css";

export default function Contect() {
  return (
    <div className="contect-page">
      <h2>Contact Us</h2>

      <div className="contect-layout">
        {/* 🔹 Left side - Contact Info */}
        <div className="contect-info">
          {/* Email */}
          <a
          
            className="contect-card"
          >
            <img src="/eee.png" alt="Email Icon" className="contect-pic" />
            <div>
              <h3>Email</h3>
              <p>owen@crew-estimation.com</p>
            </div>
          </a>

          {/* Location */}
          <div className="contect-card">
            <img src="/lll.png" alt="Location Icon" className="contect-pic" />
            <div>
              <h3>Location</h3>
              <p>Florida, USA</p>
            </div>
          </div>

          {/* Phone → WhatsApp */}
          <a
            href="https://wa.me/+17869870481"
            target="_blank"
            rel="noopener noreferrer"
            className="contect-card"
          >
            <img src="/ppp.png" alt="Phone Icon" className="contect-pic" />
            <div>
              <h3>Phone</h3>
              <p>+17869870481</p>
            </div>
          </a>
        </div>

        {/* 🔹 Right side - Map */}
       <div className="map-container">
  <iframe
    title="Google Map Florida"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14378862.505994188!2d-94.68627435000002!3d27.994402399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8c42f66d7c07%3A0x5d12f64e1dfbec8d!2sFlorida%2C%20USA!5e0!3m2!1sen!2s!4v1694865900000!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

      </div>
    </div>
  );
}
