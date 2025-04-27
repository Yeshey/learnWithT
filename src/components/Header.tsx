import React, { useState, useEffect, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Function to check if a hash link points to the current page
  const isHomePageHash = (path: string) => window.location.pathname === '/' && path.startsWith('/#');
  const isCurrentPageHash = (path: string) => path.startsWith('/#') && window.location.pathname === '/';


  return (
    <>
      <div className="fixed-header-wrapper">
        {/* Top Strip remains same */}
        <div className="top-strip">
          <div className="container top-strip-container">
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              <a href="tel:+351913386788">+351 913 386 788</a>
            </div>
          </div>
        </div>

        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container header-container">
            <div className="logo-container">
              {/* Logo always goes to top of home */}
              <HashLink smooth to="/#" className="logo" onClick={closeMenu}>Speak Portuguese<br />With Tânia</HashLink>
            </div>
            <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                {/* Home Link */}
                <li><NavLink to="/" onClick={closeMenu} end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>

                {/* About Link (Separate Page) */}
                <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>

                {/* My Offers Link (Homepage Section) */}
                <li><HashLink smooth to="/#offers" onClick={closeMenu}
                    // Optional active styling for hash links (might need manual check)
                    // className={isCurrentPageHash('/#offers') ? "active-link" : ""}
                    >My Offers</HashLink></li>

                {/* Student's Stories Link (Homepage Section) */}
                 <li><HashLink smooth to="/#stories" onClick={closeMenu}>Student's Stories</HashLink></li>

                {/* Student's Library Link (Homepage Section) */}
                <li><HashLink smooth to="/#library" onClick={closeMenu}>Student's Library</HashLink></li>

                {/* FAQ Link (Separate Page) */}
                <li><NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>FAQ</NavLink></li>

                {/* Translations Link (Separate Page) */}
                <li><NavLink to="/translations" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Translations</NavLink></li>

                {/* Contact Link (Homepage Section) */}
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