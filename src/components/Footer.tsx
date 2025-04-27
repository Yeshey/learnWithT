import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { contactInfo } from '../config/contactInfo';
import ConditionalPhoneLink from './ConditionalPhoneLink'; // Import the new component
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* ... logo ... */}
          <div className="footer-logo"> <HashLink smooth to="/#" className="footer-logo-link">Speak<br />Portuguese<br />With Tânia</HashLink> </div>

          <div className="footer-links">
             {/* ... menu column ... */}
             <div className="footer-links-column"> <h4>Menu</h4> <ul> <li><Link to="/">Home</Link></li> <li><Link to="/about">About</Link></li> <li><HashLink smooth to="/#offers">My Offers</HashLink></li> <li><HashLink smooth to="/#library">Student's Library</HashLink></li> </ul> </div>
             {/* ... more column ... */}
             <div className="footer-links-column"> <h4>More</h4> <ul> <li><Link to="/faq">FAQ</Link></li> <li><Link to="/translations">Translations</Link></li> <li><HashLink smooth to="/#contact">Contact</HashLink></li> <li><Link to="/terms-conditions">Terms & Conditions</Link></li> </ul> </div>

            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                <li>
                  {/* Use the new component */}
                  <ConditionalPhoneLink
                    displayPhone={contactInfo.phone}
                    telLink={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    whatsappUrl={contactInfo.whatsappUrl}
                    className="footer-phone-link" // Add specific class for footer styling
                  />
                </li>
                <li>{contactInfo.location}</li>
              </ul>
               {/* ... social links ... */}
              <div className="footer-social"> <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a> <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a> <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
            </div>
          </div>
        </div>
        {/* ... footer bottom ... */}
         <div className="footer-bottom"> <p>© {currentYear} Tânia Almeida</p> <p>All rights reserved</p> </div>
      </div>
    </footer>
  );
};

export default Footer;