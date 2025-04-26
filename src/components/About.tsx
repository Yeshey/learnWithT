import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-heading">
          <h2>What Do I Offer?</h2>
          <div className="divider"></div>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              {/* Image is handled via CSS */}
            </div>
            <div className="service-content">
              <h3>Live Or Online Digital Group Sessions In Funchal, Madeira Island</h3>
              <p>These sessions are designed for all levels. We join knowledge to motivation, creating a supportive and fun experience sharing learning as a team.</p>
              <a href="#contact" className="btn">Learn More</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              {/* Image is handled via CSS */}
            </div>
            <div className="service-content">
              <h3>Online Group Sessions</h3>
              <p>Join a mini-community meet new and interesting people 3 to 6 students per session max. - 10 private groups</p>
              <a href="#contact" className="btn">Learn More</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              {/* Image is handled via CSS */}
            </div>
            <div className="service-content">
              <h3>Online 1-On-1 Sessions</h3>
              <p>Designed for every current level 1-5 (1 sessions recommended) or Intensive</p>
              <a href="#contact" className="btn">Learn More</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              {/* Image is handled via CSS */}
            </div>
            <div className="service-content">
              <h3>Online 1-On-2 Sessions</h3>
              <p>Lessons are tailored specifically to reach of two depending on your preferences, and learning style. 1-5 sessions recommended</p>
              <a href="#contact" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;