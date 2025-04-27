import React, { useState, useEffect, Fragment } from 'react';
// Remove 'Link' if it's not used directly. Keep NavLink/HashLink.
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

// ... rest of the component remains the same ...
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="fixed-header-wrapper">
        {/* Top Strip */}
        <div className="top-strip">
          <div className="container top-strip-container">
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              <a href="tel:+351913386788">+351 913 386 788</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container header-container">
            <div className="logo-container">
              <HashLink smooth to="/#" className="logo" onClick={closeMenu}>Speak Portuguese<br />With Tânia</HashLink>
            </div>
            <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><NavLink to="/" onClick={closeMenu} end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
                <li><HashLink smooth to="/#offers" onClick={closeMenu}>My Offers</HashLink></li>
                <li><HashLink smooth to="/#stories" onClick={closeMenu}>Student's Stories</HashLink></li>
                <li><HashLink smooth to="/#library" onClick={closeMenu}>Student's Library</HashLink></li>
                <li><NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>FAQ</NavLink></li>
                <li><NavLink to="/translations" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Translations</NavLink></li>
                <li><HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;