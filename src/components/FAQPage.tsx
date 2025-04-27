import React, { useState } from 'react';
import '../styles/FAQPage.css'; // Create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode; // Allow JSX in answer
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};


const FAQPage: React.FC = () => {
  return (
    <section className="faq-page">
      <div className="container">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
          <div className="divider"></div>
        </div>

        <div className="faq-list">
           <FAQItem
            question="Can more than 6 students join a group session?"
            answer="Group sessions are designed for a maximum of 6 students to ensure personalized attention and active participation for everyone. For larger groups, please contact me to discuss custom arrangements."
          />
          <FAQItem
            question="What's the difference between Zoom and Face-to-Face classes?"
            answer="Zoom classes offer flexibility and convenience, allowing you to learn from anywhere with an internet connection. Face-to-face classes, held in Funchal, Madeira, provide direct interaction and immersion. Both follow the same effective teaching methodology."
          />
           <FAQItem
            question="How long is each class?"
            answer="Standard class duration is typically 60 minutes for individual sessions and 60-90 minutes for group sessions, depending on the specific course. Intensive sessions can be longer. We can discuss durations that best suit your needs."
          />
          <FAQItem
            question="Where do face-to-face classes take place?"
            answer="Face-to-face classes are held in a convenient location in Funchal, Madeira Island. The exact location will be confirmed upon booking. In some cases, classes at your location (home or office) might be possible – please inquire."
          />
           <FAQItem
            question="What software do you use for online calls?"
            answer="I primarily use Zoom for online classes due to its stability and features like screen sharing and breakout rooms. However, I am flexible and can use other platforms like Jitsi Meet or Google Meet if preferred."
          />
          <FAQItem
            question="What are the prices?"
            answer={
              <>
                <p>Pricing varies depending on the type of session (individual, pair, group) and package chosen. Generally:</p>
                <ul>
                  <li>1-on-1 sessions: Start from €X per hour (discount packages available).</li>
                  <li>1-on-2 sessions: Start from €Y per hour per pair.</li>
                  <li>Group sessions: Price depends on the course duration and size.</li>
                </ul>
                <p>Please <a href="/contact">contact me</a> for a detailed price list and to discuss the best option for you. A free 10-15 minute trial/consultation is available!</p>
                {/* Replace €X and €Y with actual prices */}
              </>
            }
          />
           {/* Add more questions as needed */}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;