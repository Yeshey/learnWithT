import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css'; // Make sure this CSS file includes the form status styles

const Contact: React.FC = () => {
  // --- State Management ---
  const initialFormData = { name: '', email: '', phone: '', level: '1', message: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  // --- Formspree Configuration ---
  // !!! REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT URL !!!
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgrgyqn";

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Reset status message if user starts typing again
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser submission
    if (isSending || !FORMSPREE_ENDPOINT.includes('/f/')) { // Basic check for valid endpoint
        if (!FORMSPREE_ENDPOINT.includes('/f/')) {
            setFormStatus({ type: 'error', message: "Form endpoint is not configured correctly." });
        }
        return;
    };

    setIsSending(true);
    setFormStatus({ type: 'idle', message: '' }); // Clear previous status

    // Prepare data using FormData for reliable submission
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email); // Formspree uses 'email' or '_replyto' for reply-to
    if (formData.phone) {
      data.append("phone", formData.phone);
    }
    // Use a descriptive name for the select field's data
    const levelTopicValue = formData.level === 'other' ? 'Other Matters' : `Level ${formData.level}`;
    data.append("level_or_topic", levelTopicValue);
    data.append("message", formData.message);
    // Add the hidden subject with the desired format
    data.append("_subject", `Alguém Preencheu o Formulário no Site! - ${levelTopicValue}`);
    // Optional: You can add other hidden fields recognized by Formspree if needed

    try {
      // Send data to Formspree using fetch API
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json' // Important for AJAX mode
        }
      });

      if (response.ok) {
        // --- SUCCESS ---
        setFormStatus({
          type: 'success',
          // ** Your Custom Success Message **
          message: "Message sent successfully! We will get back to you as soon as we can! Sit tight!"
        });
        setFormData(initialFormData); // Reset form fields
      } else {
        // --- FORM SPREE ERROR ---
        // Formspree returned an error (e.g., validation error, server issue)
        const result = await response.json(); // Try to get error details
        let errorMessage = "Submission failed. Please check your input and try again."; // Default error
        if (result?.errors?.length > 0) {
           // Use specific errors from Formspree if available
           errorMessage = result.errors.map((error: { field: string, message: string}) => `${error.field}: ${error.message}`).join(', ');
        } else if (result?.error) {
            errorMessage = result.error;
        }
        console.error("Formspree submission error:", result);
        // ** TO CHANGE THE ERROR MESSAGE SHOWN TO USER (Formspree error), MODIFY HERE: **
        setFormStatus({ type: 'error', message: `Error: ${errorMessage}` });
      }
    } catch (error) {
      // --- NETWORK ERROR ---
      // Failed to connect to Formspree (e.g., no internet)
      console.error("Network error submitting form:", error);
      // ** TO CHANGE THE ERROR MESSAGE SHOWN TO USER (Network error), MODIFY HERE: **
      setFormStatus({ type: 'error', message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSending(false); // Re-enable button regardless of outcome
    }
  };

  // --- JSX Rendering ---
  return (
    // Assuming the parent component (HomePage) provides the <section> wrapper
    <div className="container">
      <div className="section-heading">
        <h2>Let's Connect</h2>
        <div className="divider"></div>
      </div>
      <div className="contact-container">

        {/* --- Get In Touch Section (Left Side) --- */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'd love to hear from you! Whether you have questions about my classes, want to schedule a lesson, or just want to chat about learning Portuguese, feel free to reach out.</p>
          <div className="info-item">
            <span className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href="mailto:tania.jmsa@gmail.com">tania.jmsa@gmail.com</a>
          </div>
          <div className="info-item">
            <span className="info-icon"><FontAwesomeIcon icon={faPhone} /></span>
            <a href="tel:+351913386788">+351 913 386 788</a>
          </div>
          <div className="info-item">
            <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
            <p>Funchal, Madeira Island, Portugal</p>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100000535254646" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/tania.jmsalm/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-filipe-almeida/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://wa.me/351913386788" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        {/* --- Contact Form Section (Right Side) --- */}
        <div className="contact-form">
          <h3>Book Your Lesson</h3>
          <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p>
          {/* Form uses onSubmit for AJAX */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="name" // Used by FormData
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                disabled={isSending}
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email" // Used by FormData & Formspree Reply-To
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                disabled={isSending}
              />
            </div>
            {/* Phone */}
            <div className="form-group">
              <input
                type="tel"
                name="phone" // Used by FormData
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (Optional)"
                disabled={isSending}
              />
            </div>
            {/* Level */}
            <div className="form-group">
              {/* 'name' here corresponds to state, 'name' in FormData matters */}
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                disabled={isSending}
              >
                <option value="1">Level 1 - Beginner</option>
                <option value="2">Level 2 - Elementary</option>
                <option value="3">Level 3 - Intermediate</option>
                <option value="4">Level 4 - Upper Intermediate</option>
                <option value="5">Level 5 - Advanced</option>
                <option value="other">Other Matters</option>
              </select>
            </div>
            {/* Message */}
            <div className="form-group">
              <textarea
                name="message" // Used by FormData
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you'd like to focus on"
                rows={5}
                required
                disabled={isSending}
              ></textarea>
            </div>

            {/* Status Message Area */}
            {/* Ensure you have CSS for .form-status-container and the status classes */}
            <div className="form-status-container">
              {isSending && <p className="form-status sending">Sending message...</p>}
              {formStatus.type === 'success' && <p className="form-status success">{formStatus.message}</p>}
              {formStatus.type === 'error' && <p className="form-status error">{formStatus.message}</p>}
            </div>

            {/* Submit Button */}
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