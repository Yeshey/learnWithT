import React from 'react';

// Import the NEW components
import HeroTop from './HeroTop';
import TeacherIntro from './TeacherIntro'; 
// Other component imports remain the same
import Services from './Services';
import Testimonials from './Testimonials';
import StudentsLibraryContent from './StudentsLibraryContent';
import Contact from './Contact';

// Import section-specific styles
import '../styles/HomePage.css'; 
import '../styles/Services.css';
import '../styles/Testimonials.css';
import '../styles/StudentsLibraryContent.css';
import '../styles/Contact.css';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - now uses HeroTop */}
      <section className="homepage-section hero-section">
        <HeroTop />
      </section>

      {/* Teacher Intro Section - now its own component and section */}
      <section className="homepage-section teacher-intro-section">
        <div className="container">
           <TeacherIntro />
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="homepage-section offers-section">
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