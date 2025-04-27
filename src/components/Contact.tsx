import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css'; // Ensure this CSS is correct now
import { Link } from 'react-router-dom'; // Import Link

const Contact: React.FC = () => {
  // ... (useState, handleChange, handleSubmit remain the same)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', level: '1', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { const { name, value } = e.target; setFormData(prevState => ({ ...prevState, [name]: value })); };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); console.log('Form submitted:', formData); setFormData({ name: '', email: '', phone: '', level: '1', message: '' }); alert('Thank you for your message! I will get back to you soon.'); };


  return (
    // Note: This component will likely be wrapped by Layout.tsx now
    // So the <section> might be redundant if Layout handles padding,
    // but keep it for semantic structure for now.
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h2>Let's Connect</h2>
          <div className="divider"></div>
        </div>

        <div className="contact-container">
          {/* Reverted class name */}
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
              <a href="#" className="social-link" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://wa.me/351913386788" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Book Your Lesson</h3>
            <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p>

            <form onSubmit={handleSubmit}>
              {/* Form groups remain the same */}
              <div className="form-group"><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /></div>
              <div className="form-group"><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /></div>
              <div className="form-group"><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /></div>
              <div className="form-group"><select name="level" value={formData.level} onChange={handleChange}><option value="1">Level 1 - Beginner</option><option value="2">Level 2 - Elementary</option><option value="3">Level 3 - Intermediate</option><option value="4">Level 4 - Upper Intermediate</option><option value="5">Level 5 - Advanced</option></select></div>
              <div className="form-group"><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me what you'd like to focus on" rows={5}></textarea></div>
              <button type="submit" className="btn">Send Message</button>
            </form>

            <p className="form-note">Or WhatsApp me directly to book your class!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;