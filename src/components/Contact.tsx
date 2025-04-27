import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';
// Import Firebase functions and callable
import { functions } from '../firebase'; // Adjust path if needed
import { httpsCallable, HttpsCallableResult } from "firebase/functions";

const Contact: React.FC = () => {
  const initialFormData = { name: '', email: '', phone: '', level: '1', message: '' };
  const [formData, setFormData] = useState(initialFormData);
  // Add state for loading and status messages
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Reset status if user starts typing again
    if (formStatus.type !== 'idle') {
        setFormStatus({ type: 'idle', message: '' });
    }
  };

  // Reference the Cloud Function
  const sendEmailFunction = httpsCallable(functions, 'sendContactEmail');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return; // Prevent multiple submissions

    setIsSending(true);
    setFormStatus({ type: 'idle', message: '' }); // Clear previous status

    try {
      // Call the function with form data
      const result = await sendEmailFunction(formData) as HttpsCallableResult<{ success: boolean; message: string }>;

      if (result.data.success) {
        setFormStatus({ type: 'success', message: "Message sent successfully! You should receive a confirmation email shortly." });
        setFormData(initialFormData); // Reset form
      } else {
        // This case might not happen if function throws error on failure
        setFormStatus({ type: 'error', message: result.data.message || "An unknown error occurred." });
      }
    } catch (error: any) {
       console.error("Error calling Firebase function:", error);
       // Try to get a meaningful error message from Firebase HttpsError
       const message = error.message || "Failed to send message. Please try again later.";
       setFormStatus({ type: 'error', message: `Error: ${message}` });
    } finally {
      setIsSending(false); // Re-enable button
    }
  };

  return (
    <div className="container"> {/* Use container if parent doesn't provide */}
      <div className="section-heading">
        <h2>Let's Connect</h2>
        <div className="divider"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
            {/* Contact info items */}
            <h3>Get In Touch</h3>
            <p>I'd love to hear from you! Whether you have questions about my classes, want to schedule a lesson, or just want to chat about learning Portuguese, feel free to reach out.</p>
            <div className="info-item"><span className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></span><a href="mailto:tania.jmsa@gmail.com">learnportuguesewithtania@gmail.com</a></div>
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
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="form-group"><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required disabled={isSending}/></div>
            <div className="form-group"><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required disabled={isSending}/></div>
            <div className="form-group"><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone (Optional)" disabled={isSending}/></div>
            <div className="form-group"><select name="level" value={formData.level} onChange={handleChange} disabled={isSending}><option value="1">Level 1 - Beginner</option><option value="2">Level 2 - Elementary</option><option value="3">Level 3 - Intermediate</option><option value="4">Level 4 - Upper Intermediate</option><option value="5">Level 5 - Advanced</option><option value="other">Other Matters</option></select></div>
            <div className="form-group"><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me what you'd like to focus on" rows={5} required disabled={isSending}></textarea></div>

            {/* Status Messages */}
            <div className="form-status-container">
                {isSending && <p className="form-status sending">Sending message...</p>}
                {formStatus.type === 'success' && <p className="form-status success">{formStatus.message}</p>}
                {formStatus.type === 'error' && <p className="form-status error">{formStatus.message}</p>}
            </div>

            <button type="submit" className="btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <p className="form-note">Or WhatsApp me directly to book your class!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;