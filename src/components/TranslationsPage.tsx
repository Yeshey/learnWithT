import React from 'react';
import '../styles/TranslationsPage.css'; // Create this CSS file
import { HashLink } from 'react-router-hash-link';
// import translationImage from '../assets/images/translations-hero.jpg'; // Add a relevant hero image

const TranslationsPage: React.FC = () => {
  return (
    <section className="translations-page">
      {/* Optional Hero Section */}
      <div className="page-hero translations-hero">
         {/* <img src={translationImage} alt="Translations service" /> */}
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Translations</h1>
        </div>
      </div>

      <div className="container page-content">
         {/* Based on the image provided */}
         <div className="translation-details">
            <div className="translation-column">
                <h3>Translation Services:</h3>
                <ul>
                    <li>Price per Word: €0.12</li> {/* Replace with actual price */}
                    <li>Minimum Charge (up to 250 words): €30</li> {/* Replace with actual price */}
                    <li>Hourly Rate: €40 per hour</li> {/* Replace with actual price */}
                </ul>

                <h3>Who is this service for?</h3>
                 <ul>
                    <li><strong>Digital Nomads:</strong> Need to understand documents or communicate with local businesses in Portuguese? I offer translation services to help you navigate the language barrier.</li>
                    <li><strong>Expats:</strong> Whether you're dealing with rental agreements, bureaucracy, administrative, or personal documents, I can help with accurate, context-driven translations.</li>
                    <li><strong>Students of All Levels:</strong> If you're learning Portuguese and need assistance with text translations, this service can support your study while enhancing your comprehension of the language.</li>
                </ul>
            </div>

            <div className="translation-column">

                <h3>What you'll gain:</h3>
                <ul>
                    <li><strong>Accurate and Contextual Translations:</strong> Translations are done with attention to cultural nuances and context, ensuring the meaning is clear and natural.</li>
                    <li><strong>Fast and Reliable Service:</strong> Get your documents translated quickly and efficiently, with a focus on meeting your deadlines.</li>
                    <li><strong>Confidentiality:</strong> Your documents and information will be handled with the utmost care and confidentiality.</li>
                </ul>
            </div>
         </div>

         {/* Reusable Contact/Booking Section */}
         <div className="translation-contact-cta">
            <h3>Need a Translation?</h3>
            <p>Get in touch to discuss your project requirements and receive a personalized quote.</p>
            <HashLink smooth to="/#contact" className="btn">Request Quote</HashLink>
         </div>
      </div>
    </section>
  );
};

export default TranslationsPage;