import React, { useState, useEffect, Fragment } from 'react'; // Import Fragment
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // We need to calculate the header height to adjust body padding later if needed
  // For now, we'll use fixed CSS padding in App.css
  // const [headerHeight, setHeaderHeight] = useState(0);
  // const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll trigger if needed based on top strip height
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Function to update header height (if dynamic padding is needed later)
    // const updateHeaderHeight = () => {
    //   if (headerRef.current) {
    //     setHeaderHeight(headerRef.current.offsetHeight);
    //     // Could potentially set CSS variable: document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    //   }
    // };

    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', updateHeaderHeight);
    // updateHeaderHeight(); // Initial height

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Use Fragment or div wrapper if needed, here we use Fragment <>
    <>
      {/* Fixed Wrapper for both strips */}
      <div className="fixed-header-wrapper">
        {/* Top Strip */}
        <div className="top-strip">
          <div className="container top-strip-container">
            {/* Moved contact info here */}
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
              <a href="/" className="logo">Speak Portuguese<br />With Tânia</a>
            </div>
            {/* Contact info is removed from here */}
            <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setMenuOpen(false)}>My Offers</a></li>
                <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Student's Library</a></li>
                <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
                <li><a href="#translations" onClick={() => setMenuOpen(false)}>Translations</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/* Body padding will be handled in App.css */}
    </>
  );
};

export default Header;