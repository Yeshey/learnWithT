import React from 'react';
import '../styles/AboutPage.css'; // Create this CSS file
import taniaProfile from '../assets/images/tania-profile.jpg'; // Adjust path if needed

const AboutPage: React.FC = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="section-heading">
          <h2>About Tânia</h2>
          <div className="divider"></div>
        </div>
        <div className="about-content">
           <div className="about-image">
             <img src={taniaProfile} alt="Tânia Almeida" />
           </div>
           <div className="about-text">
             {/* Reuse content from original Hero's teacher-bio */}
             <h3>Tânia Almeida, Portuguese Teacher</h3>
              <p>I am Tânia – a language enthusiast driven by a passion for languages, education, and cultural connection.</p>
              <p>Living in beautiful Madeira Island, Funchal, Portugal, I combine quality digital lessons and enthusiasm for modernity embrace the communicative approach and culture through personalized, engaging learning experiences.</p>
              <p>With Qualified Teacher Status (QTS) recognized by the UK's National College for Teaching & Leadership and certified by the Cambridge Examiner for Cambridge Assessments and Pearson Edexcel - I bring a professional approach.</p>
              <p>My approach integrates John W. Oller's pedagogical methods, fostering a positive flux and effective environment that inspires confidence.</p>
              <p>In addition to teaching, I am an intuitive life coach, guiding individuals through the growth. Communicative & CLIL's Teaching, The work method is a mix of communicative and content-based learning techniques, prioritizing real-life language use.</p>
              <p>My conversational-native-method for creating supportive communities and encouraging meaningful connections, I believe that language learning becomes easy through human connections, bridging both learning and life.</p>
              <p>Through my work, I help others unlock their potential and embrace growth through languages.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;