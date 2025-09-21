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
                <p>I offer several options to fit your learning style and budget. Prices are structured by session type, with special offers available for packages.</p>

                <h4>Online Classes - 1 Person (60 minutes per session)</h4>
                <ul>
                  <li><strong>Price per hour:</strong> €20</li>
                  <li><strong>4 Sessions:</strong> €80</li>
                  <li><strong>8 Sessions:</strong> €160</li>
                  <li><strong>16 Sessions:</strong> €320 (Special Offer: €300 - includes one free class)</li>
                </ul>

                <h4>Face-to-Face Classes - 1 Person (75 minutes per session)</h4>
                <p className="faq-location-note"><em>Held in São Martinho, Funchal.</em></p>
                <ul>
                  <li><strong>Price per session:</strong> €25</li>
                  <li><strong>4 Sessions:</strong> €100</li>
                  <li><strong>8 Sessions:</strong> €200 (Special Offer: €190)</li>
                  <li><strong>16 Sessions:</strong> €400 (Special Offer: €375 - includes one free class)</li>
                </ul>
                
                <h4>Online Classes - 2 People (60 minutes per session)</h4>
                <ul>
                  <li><strong>Price per hour:</strong> €30 per pair</li>
                  <li><strong>4 Sessions:</strong> €120</li>
                  <li><strong>8 Sessions:</strong> €240</li>
                  <li><strong>16 Sessions:</strong> €480 (Special Offer: €450)</li>
                </ul>

                <h4>Face-to-Face Classes - 2 People (75 minutes per session)</h4>
                <p className="faq-location-note"><em>Held in São Martinho, Funchal.</em></p>
                <ul>
                  <li><strong>Price per session:</strong> €35 per pair</li>
                  <li><strong>4 Sessions:</strong> €140</li>
                  <li><strong>8 Sessions:</strong> €280</li>
                  <li><strong>16 Sessions:</strong> €560 (Special Offer: €525 - includes one free class)</li>
                </ul>
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