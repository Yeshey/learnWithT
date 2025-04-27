import React from 'react';
import '../styles/StudentsLibraryPage.css'; // Create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeadphones, faFileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const StudentsLibraryContent: React.FC = () => {
  return (
    <>
    {/*<section className="students-library" id="students-library">*/ } 
      <div className="container">
        <div className="section-heading">
          {/* Content moved from original Testimonials.tsx */}
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
            {/* Card 1 */}
            <div className="library-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3>Grammar Resources</h3>
              <p>Comprehensive grammar explanations and exercises for all levels.</p>
              {/* Make these actual links or protected routes later */}
              <HashLink smooth to="/#contact" className="btn btn-secondary">Access</HashLink>
            </div>

            {/* Card 2 */}
            <div className="library-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <h3>Audio Materials</h3>
              <p>Listening exercises, conversations, and pronunciation guides.</p>
              <HashLink smooth to="/#contact" className="btn btn-secondary">Access</HashLink>
            </div>

            {/* Card 3 */}
            <div className="library-card">
              <div className="card-icon">
                 <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <h3>Homework Sheets</h3>
              <p>Practice materials and assignments for between classes.</p>
              <HashLink smooth to="/#contact" className="btn btn-secondary">Access</HashLink>
            </div>

            {/* Card 4 */}
            <div className="library-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>Online Resources</h3>
              <p>Curated links to helpful websites, apps, and additional tools.</p>
              <HashLink smooth to="/#contact" className="btn btn-secondary">Access</HashLink>
            </div>
          </div>

          <div className="library-note">
            <p>*Access to the student library is provided after your first lesson.</p>
          </div>
        </div>
      </div>
    {/*</section>*/}
    </>
  );
};

export default StudentsLibraryContent;