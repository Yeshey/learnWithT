import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const HeroContent: React.FC = () => {
  return (
    <>
    {/*<section className="hero" id="hero">*/ } 
      <div className="hero-content">
        <div className="hero-text">
          <h1>Learn Portuguese<br />Online Or In Person!</h1>
          <p>All you need is a laptop,<br />a good internet connection<br />and motivation! <br/> Face-to-face classes in São Martinho, Funchal!</p>
          {/*<a href="#contact" className="btn">Let's Learn</a>*/}
          <HashLink smooth to="/#contact" className="btn">Let's Learn</HashLink>
        </div>
        <div className="hero-image">
          {/* Image is handled by CSS background in production */}
        </div>
      </div>
      <div className="teacher-intro">
        <div className="teacher-photo">
          {/* Teacher photo is handled via CSS background */}
        </div>
        <div className="teacher-bio">
          <h2>Tânia Almeida,<br />Portuguese Teacher</h2>
          <p>Olá! I'm Tânia — your guide to the Portuguese language and culture.</p>
          <p>Living in beautiful Madeira Island, Funchal, Portugal, with a degree in Romance Languages and Literatures and years of experience teaching in primary and secondary schools, I bring a strong academic and pedagogical foundation to every lesson. My journey has been shaped by a deep passion for language, communication, and human connection.</p>
          <p>I also completed a specialized course in Teaching and Learning Portuguese as a Non-Native Language at the University of Coimbra, which sharpened my skills in helping international learners confidently navigate the richness of the Portuguese language.</p>
          <p>Whether you're learning for travel, work, or pure curiosity, I design personalised lessons that are interactive, culturally immersive, and focused on real communication. My mission is to make learning Portuguese feel natural, meaningful — and even fun.</p>
          <p>Let’s turn your interest in Portuguese into a lasting skill. Welcome to a space where language builds bridges.</p>
          
          <Link to="/about" className="btn">Read More</Link>
        </div>
      </div>
    {/*</section>*/}
    </>
  );
};

export default HeroContent;