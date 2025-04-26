import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="footer-logo-link">Speak<br />Portuguese<br />With Tânia</a>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">My Offers</a></li>
                <li><a href="#testimonials">Student's Library</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>More</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#translations">Translations</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:tania.jmsa@gmail.com">tania.jmsa@gmail.com</a></li>
                <li><a href="tel:+351913386788">+351 913 386 788</a></li>
                <li>Funchal, Madeira Island</li>
              </ul>
              <div className="footer-social">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tânia Almeida</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;