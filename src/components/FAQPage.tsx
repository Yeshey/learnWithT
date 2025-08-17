import React, { useState, useEffect } from 'react';
import '../styles/FAQPage.css'; // Create this CSS file
import { HashLink } from 'react-router-hash-link'; // Make sure HashLink is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

// modify FAQItem to accept defaultOpen:
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false  }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    // If defaultOpen changes later, update state (rare, but safe)
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

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
  const location = useLocation();
  const openPrices = location.hash === '#prices' || location.hash === '#price' || location.hash === '#what-are-the-prices';

  return (
    <section className="faq-page">
      <div className="container">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
          <div className="divider"></div>
        </div>

        <div className="faq-list">
          <FAQItem
            question="What are the prices?"
            defaultOpen={openPrices}
            answer={
              <>
                <p>I offer several options to fit your learning style and budget. Prices are structured by session type, with discounts available for packages.</p>

                <h4>Online Classes (60 minutes per session)</h4>
                <ul>
                  <li><strong>1-on-1 Session:</strong> €20</li>
                  <li><strong>1-on-2 Session:</strong> €25 per pair</li>
                </ul>

                <h4>Face-to-Face Classes (75 minutes per session)</h4>
                <p className="faq-location-note"><em>Held in São Martinho, Funchal.</em></p>
                <ul>
                  <li><strong>1-on-1 Session:</strong> €25</li>
                  <li><strong>1-on-2 Session:</strong> €30 per pair</li>
                </ul>

                <h4>Package Deals & Discounts</h4>
                <p>Save on your lessons by purchasing a package. The discount is applied to the standard price of each class in the package.</p>
                <ul>
                  <li><strong>Buy 4 Classes:</strong> Standard price</li>
                  <li><strong>Buy 8 Classes:</strong> Get a <strong>€1 discount</strong> on each class</li>
                  <li><strong>Buy 16 Classes:</strong> Get a <strong>€2 discount</strong> on each class</li>
                </ul>
                <p>For example, a package of 16 online 1-on-1 classes would cost just €18 per session!</p>
                <br />
                <p>Please <HashLink to="/#contact">contact me</HashLink> to discuss the best plan for you. A free 15-minute trial/consultation is available!</p>
              </>
            }
          />
          <FAQItem
            question="What is your cancellation and rescheduling policy?"
            answer="Clients must provide at least 24 hours' notice for cancellations or rescheduling requests. Failure to provide sufficient notice may result in the session being charged. The Teacher reserves the right to reschedule sessions due to unforeseen circumstances, providing as much notice as possible."
          />
          <FAQItem
            question="Where do face-to-face classes take place?"
            answer="Face-to-face classes are held in a convenient location in São Martinho Funchal, near Praia Formosa, Madeira Island. The exact location will be confirmed upon booking. In some cases, classes at your location (home or office) might be possible for a higher price – please inquire."
          />
           <FAQItem
            question="What software do you use for online calls?"
            answer="I primarily use MS Teams for online classes due to its stability and features like screen sharing. However, I am flexible and can use other platforms like Jitsi Meet or Google Meet if preferred."
          />
           <FAQItem
            question="Can you do group sessions?"
            answer="I used to teach full classrooms, so it's possible, I'm not providing this service now so it would have to be discussed – please inquire."
          />
          <FAQItem
            question="What's the difference between Zoom and Face-to-Face classes?"
            answer="Zoom classes offer flexibility and convenience, allowing you to learn from anywhere with an internet connection. Face-to-face classes, held in Funchal, Madeira, provide direct interaction and immersion. Both follow the same effective teaching methodology."
          />
           <FAQItem
            question="How long is each class?"
            answer="Standard class duration is typically 60 minutes for online sessions and 75 minutes for face-to-face sessions, But we can discuss durations that best suit your needs."
          />
           {/* Add more questions as needed */}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;