import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/HomePage.css'; // Styles are shared

const HeroTop: React.FC = () => {
  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1>Learn Portuguese<br />Online Or In Person!</h1>
        <p>All you need is a laptop,<br />a good internet connection<br />and motivation! <br/> Face-to-face classes in São Martinho, Funchal!</p>
        <HashLink smooth to="/#contact" className="btn">Let's Learn</HashLink>
      </div>
      <div className="hero-image">
        {/* This div is used for the background image on desktop */}
      </div>
    </div>
  );
};

export default HeroTop;