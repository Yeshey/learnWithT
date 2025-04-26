import React from 'react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>Student's Library</h2>
          <div className="divider"></div>
        </div>
        
        <div className="library-container">
          <p className="library-intro">
            Access a variety of resources designed to enhance your Portuguese learning experience.
            From grammar sheets to vocabulary lists, audio files to practice exercises - everything you need
            to support your language journey.
          </p>
          
          <div className="library-grid">
            <div className="library-card">
              <div className="card-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Grammar Resources</h3>
              <p>Comprehensive grammar explanations and exercises for all levels.</p>
              <a href="#" className="btn btn-secondary">Access</a>
            </div>
            
            <div className="library-card">
              <div className="card-icon">
                <i className="fas fa-headphones"></i>
              </div>
              <h3>Audio Materials</h3>
              <p>Listening exercises, conversations, and pronunciation guides.</p>
              <a href="#" className="btn btn-secondary">Access</a>
            </div>
            
            <div className="library-card">
              <div className="card-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Homework Sheets</h3>
              <p>Practice materials and assignments for between classes.</p>
              <a href="#" className="btn btn-secondary">Access</a>
            </div>
            
            <div className="library-card">
              <div className="card-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Online Resources</h3>
              <p>Curated links to helpful websites, apps, and additional tools.</p>
              <a href="#" className="btn btn-secondary">Access</a>
            </div>
          </div>
          
          <div className="library-note">
            <p>*Access to the student library is provided after your first lesson.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;