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
          <p>All you need is a laptop,<br />a good internet connection<br />and motivation!</p>
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
          <p>I am Tânia – a language enthusiast driven by a passion for languages, education, and cultural connection.</p>
          <p>Living in beautiful Madeira Island, Funchal, Portugal, I combine quality digital lessons and enthusiasm for modernity embrace the communicative approach and culture through personalized, engaging learning experiences.</p>
          <p>With Qualified Teacher Status (QTS) recognized by the UK's National College for Teaching & Leadership and certified by the Cambridge Examiner for Cambridge Assessments and Pearson Edexcel - I bring a professional approach.</p>
          <p>My approach integrates John W. Oller's pedagogical methods, fostering a positive flux and effective environment that inspires confidence.</p>
          <p>In addition to teaching, I am an intuitive life coach, guiding individuals through the growth. Communicative & CLIL's Teaching, The work method is a mix of communicative and content-based learning techniques, prioritizing real-life language use.</p>
          <p>My conversational-native-method for creating supportive communities and encouraging meaningful connections, I believe that language learning becomes easy through human connections, bridging both learning and life.</p>
          <p>Through my work, I help others unlock their potential and embrace growth through languages.</p>
          <Link to="/about" className="btn">Read More</Link>
        </div>
      </div>
    {/*</section>*/}
    </>
  );
};

export default HeroContent;