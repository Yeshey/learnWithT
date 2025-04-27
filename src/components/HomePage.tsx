import React from 'react';

// Import section components
import HeroContent from './HeroContent'; // Renamed original Hero component internally
import Services from './Services'; // Offers section
import Testimonials from './Testimonials'; // Stories section
import StudentsLibraryContent from './StudentsLibraryContent'; // Renamed original Library component internally
import Contact from './Contact'; // Contact section

// Styles for the home page sections might be imported here or within each component
import '../styles/HomePage.css'; // Main homepage styles if any
// You might still need styles specific to each section:
import '../styles/Services.css';
import '../styles/Testimonials.css';
import '../styles/StudentsLibraryPage.css'; // Reusing this CSS for the section
import '../styles/Contact.css';


const HomePage: React.FC = () => {
  return (
    // No outer <section> needed as Layout provides <main>
    <>
      {/* Hero Section (no id needed, it's the top) */}
      <HeroContent />

      {/* Offers Section */}
      {/* Wrap Services component content in a div/section with ID */}
      <div id="offers">
        <Services />
      </div>

      {/* Student's Stories Section */}
      {/* Wrap Testimonials component content in a div/section with ID */}
       <div id="stories">
         <Testimonials />
      </div>

      {/* Student's Library Section */}
      {/* Wrap StudentsLibrary component content in a div/section with ID */}
      <div id="library">
        <StudentsLibraryContent />
      </div>

      {/* Contact Section */}
      {/* Wrap Contact component content in a div/section with ID */}
      <div id="contact">
         <Contact />
      </div>
    </>
  );
};

export default HomePage;

// --- You'll need to rename the original components slightly ---

// Rename original Hero.tsx -> HeroContent.tsx
// Rename original StudentsLibraryPage.tsx -> StudentsLibraryContent.tsx

// Make sure these components now return their direct content
// (e.g. the content inside their original <section> tag)
// instead of the <section> tag itself, as HomePage now provides the wrapper.

// Example: src/components/HeroContent.tsx (previously Hero.tsx)
/*
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // was Hero.css

const HeroContent: React.FC = () => {
  return (
    // Return the content directly, without the outer <section> tag
    <>
        <div className="hero-content"> // Kept original structure inside
             // ... hero text ...
             <Link to="/contact" className="btn">Let's Learn</Link> // Stays Link or HashLink to /#contact
             // ... hero image ...
        </div>
        <div className="teacher-intro"> // Kept original structure inside
             // ... teacher photo ...
             // ... teacher bio ...
             <Link to="/about" className="btn">Read More</Link> // Link to separate page
        </div>
    </>
  );
};
export default HeroContent;
*/

// Example: src/components/StudentsLibraryContent.tsx (previously StudentsLibraryPage.tsx)
/*
import React from 'react';
import { HashLink } from 'react-router-hash-link'; // Use HashLink here
import '../styles/StudentsLibraryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeadphones, faFileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';

const StudentsLibraryContent: React.FC = () => {
    return (
        // Return the content directly, remove outer <section>
         <div className="container">
            <div className="section-heading">
                <h2>Student's Library</h2>
                <div className="divider"></div>
            </div>
             <div className="library-container">
                 // ... intro text ...
                 <div className="library-grid">
                     // ... cards ...
                     <div className="library-card">
                         // ... icon, h3, p ...
                         <HashLink smooth to="/#contact" className="btn btn-secondary">Access</HashLink> // Scroll to contact
                     </div>
                     // ... other cards with HashLink ...
                 </div>
                // ... note ...
            </div>
        </div>
    );
}
export default StudentsLibraryContent;
*/