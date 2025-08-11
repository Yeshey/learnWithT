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
              <h3>15-min Free Demo Session</h3>
              <p>The perfect opportunity for us to meet, discuss your goals, and see if we are a good fit, with no obligation.</p>
              {/* Link to detail page */}
              <Link to="/offer/group-funchal" className="btn">Learn More</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
             <div className="service-image service-image-2"></div>
            <div className="service-content">
              <h3>Online 1-on-1 Sessions</h3>
              <p>Personalized lessons tailored to your specific needs and learning pace, from beginner to advanced levels.</p>
             <Link to="/offer/private-1on1" className="btn">Pricing & Learn More</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-image service-image-3"></div>
            <div className="service-content">
              <h3>Online 1-on-2 Sessions</h3>
              <p>Learn with a friend or partner in a session that balances individual attention with collaborative practice.</p>
              <Link to="/offer/private-1on2" className="btn">Pricing & Learn More</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
             <div className="service-image service-image-4"></div>
            <div className="service-content">
              <h3>Groups, Companies & More </h3>
              <p>Interested in classes for a private group? Language Classes for your company? Or something else? Contact me for custom packages.</p>
              <Link to="/offer/group-online" className="btn">Inquire Now</Link>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Services;