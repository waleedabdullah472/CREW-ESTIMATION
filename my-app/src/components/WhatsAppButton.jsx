import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const whatsappNumber = "+17869870481"; // Replace with your WhatsApp number
  const message = "Hello, I am interested in your services!"; // Pre-filled message

  return (
    <div className="whatsapp-container">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
}
