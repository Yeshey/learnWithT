import React, { useState, useEffect, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../config/contactInfo';
import ConditionalPhoneLink from './ConditionalPhoneLink'; // Import the new component
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // REMOVE isMobile state and useEffect

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // REMOVE phoneLinkHref calculation

  return (
    <>
      <div className="fixed-header-wrapper">
        <div className="top-strip">
          <div className="container top-strip-container">
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              {/* Use the new component */}
              <ConditionalPhoneLink
                displayPhone={contactInfo.phone}
                telLink={`tel:${contactInfo.phone.replace(/\s/g, '')}`} // Create tel link
                whatsappUrl={contactInfo.whatsappUrl}
                // Optionally pass a className if needed for specific header styling
                // className="header-phone-link"
              />
            </div>
          </div>
        </div>
        {/* ... rest of header ... */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
             <div className="container header-container">
                 <div className="logo-container"> <HashLink smooth to="/#" className="logo" onClick={closeMenu}>Speak Portuguese<br />With Tânia</HashLink> </div>
                 <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
                 <nav className={`main-nav ${menuOpen ? 'open' : ''}`}> <ul> <li><NavLink to="/" onClick={closeMenu} end className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink></li> <li><NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink></li> <li><HashLink smooth to="/#offers" onClick={closeMenu}>My Offers</HashLink></li> <li><HashLink smooth to="/#stories" onClick={closeMenu}>Student's Stories</HashLink></li> <li><HashLink smooth to="/#library" onClick={closeMenu}>Student's Library</HashLink></li> <li><NavLink to="/faq" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>FAQ</NavLink></li> <li><NavLink to="/translations" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Translations</NavLink></li> <li><HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink></li> </ul> </nav>
             </div>
         </header>
      </div>
    </>
  );
};

export default Header;