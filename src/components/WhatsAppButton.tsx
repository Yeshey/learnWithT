import React from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/351913386788" 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;