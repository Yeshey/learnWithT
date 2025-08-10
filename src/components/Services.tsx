import React from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom'; // Use regular Link

const Services: React.FC = () => {
  return (
    // Removed outer <section> tag, HomePage.tsx provides wrapper <div id="offers">
     <div className="container services-container"> {/* Added specific container class */}
        <div className="section-heading">
          <h2>What Do I Offer?</h2>
          <div className="divider"></div>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-image service-image-1"></div>
            <div className="service-content">
              <h3>15-min free demo session</h3>
              <p>These sessions are designed to get acquainted and get to know each other</p>
              {/* Link to detail page */}
              <Link to="/offer/group-funchal" className="btn">Learn More</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
             <div className="service-image service-image-3"></div>
            <div className="service-content">
              <h3>Online 1-On-1 Sessions</h3>
              <p>Designed for every current level 1-5...</p>
             <Link to="/offer/private-1on1" className="btn">Learn More</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-image service-image-4"></div>
            <div className="service-content">
              <h3>Online 1-On-2 Sessions</h3>
              <p>Lessons are tailored specifically to reach of two...</p>
              <Link to="/offer/private-1on2" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;