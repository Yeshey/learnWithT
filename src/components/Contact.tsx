import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';
// Remove Firebase functions imports if they were added here
// import { functions } from '../firebase'; // Remove or comment out
// import { httpsCallable, HttpsCallableResult } from "firebase/functions"; // Remove or comment out

const Contact: React.FC = () => {
  const initialFormData = { name: '', email: '', phone: '', level: '1', message: '' };
  const [formData, setFormData] = useState(initialFormData);
  // Remove state for loading and status messages
  // const [isSending, setIsSending] = useState(false);
  // const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Remove status reset logic
    // if (formStatus.type !== 'idle') {
    //     setFormStatus({ type: 'idle', message: '' });
    // }
  };

  // Remove reference to the Cloud Function
  // const sendEmailFunction = httpsCallable(functions, 'sendContactEmail');

  // Revert handleSubmit to a basic version (will be replaced by new method)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Temporarily log data - We will replace this with the new method
    console.log("Form submitted (Firebase Function call removed):", formData);
    alert("Form submission is temporarily disabled. Please use WhatsApp or email directly.");
    // Maybe reset form here if desired, or wait for new method
    // setFormData(initialFormData);
  };

  return (
    <div className="container"> {/* Use container if parent doesn't provide */}
      <div className="section-heading">
        <h2>Let's Connect</h2>
        <div className="divider"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
            {/* Contact info items remain the same */}
            <h3>Get In Touch</h3>
            <p>I'd love to hear from you! Whether you have questions about my classes, want to schedule a lesson, or just want to chat about learning Portuguese, feel free to reach out.</p>
            <div className="info-item"><span className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></span><a href="mailto:tania.jmsa@gmail.com">tania.jmsa@gmail.com</a></div>
            <div className="info-item"><span className="info-icon"><FontAwesomeIcon icon={faPhone} /></span><a href="tel:+351913386788">+351 913 386 788</a></div>
            <div className="info-item"><span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span><p>Funchal, Madeira Island, Portugal</p></div>
            <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100000535254646" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/tania.jmsalm/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-filipe-almeida/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://wa.me/351913386788" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
        </div>
        <div className="contact-form">
          <h3>Book Your Lesson</h3>
          <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p>
          {/* Keep the form element, but onSubmit will change */}
          <form onSubmit={handleSubmit}>
            {/* Form Fields - Remove 'disabled' attribute */}
            <div className="form-group"><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /></div>
            <div className="form-group"><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /></div>
            <div className="form-group"><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone (Optional)" /></div>
            <div className="form-group"><select name="level" value={formData.level} onChange={handleChange} ><option value="1">Level 1 - Beginner</option><option value="2">Level 2 - Elementary</option><option value="3">Level 3 - Intermediate</option><option value="4">Level 4 - Upper Intermediate</option><option value="5">Level 5 - Advanced</option><option value="other">Other Matters</option></select></div>
            <div className="form-group"><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me what you'd like to focus on" rows={5} required ></textarea></div>

            {/* Remove Status Messages */}
            {/* <div className="form-status-container"> ... </div> */}

            {/* Keep button, remove 'disabled' attribute */}
            <button type="submit" className="btn">
                Send Message
            </button>
          </form>
          <p className="form-note">Or WhatsApp me directly to book your class!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;