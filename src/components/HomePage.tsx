import React from 'react';

import HeroContent from './HeroContent';
import Services from './Services';
import Testimonials from './Testimonials';
import StudentsLibraryContent from './StudentsLibraryContent';
import Contact from './Contact';

// Import section-specific styles (if they contain padding/margins)
// OR define general section spacing in HomePage.css
import '../styles/HomePage.css'; // Make sure this file exists
import '../styles/Services.css';
import '../styles/Testimonials.css';
import '../styles/StudentsLibraryPage.css';
import '../styles/Contact.css';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - Give it a class for potential specific styling */}
      <section className="homepage-section hero-section">
        <HeroContent />
      </section>

      {/* Offers Section */}
      <section id="offers" className="homepage-section offers-section">
        {/* Services component now likely returns content *without* its own outer <section> */}
        <Services />
      </section>

      {/* Student's Stories Section */}
       <section id="stories" className="homepage-section stories-section">
         <Testimonials />
      </section>

      {/* Student's Library Section */}
      <section id="library" className="homepage-section library-section">
        <StudentsLibraryContent />
      </section>

      {/* Contact Section */}
      <section id="contact" className="homepage-section contact-section">
         <Contact />
      </section>
    </>
  );
};

export default HomePage;