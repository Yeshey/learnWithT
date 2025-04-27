import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const initialFormData = { name: '', email: '', phone: '', level: '1', message: '' };
  // Keep formData state if you want controlled inputs, or remove if submitting purely via HTML action
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // No custom handleSubmit needed for basic Formspree submission

  // Replace with your actual Formspree endpoint URL
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgrgyqn";

  return (
    <div className="container">
      <div className="section-heading">
        <h2>Let's Connect</h2>
        <div className="divider"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
            {/* Contact info items */}
            <h3>Get In Touch</h3>
            <p>I'd love to hear from you! ...</p>
            {/* ... other info items ... */}
            <div className="social-links">
               {/* ... social links ... */}
            </div>
        </div>
        <div className="contact-form">
          <h3>Book Your Lesson</h3>
          <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p>
          {/* Update form tag for Formspree */}
          <form action={FORMSPREE_ENDPOINT} method="POST">
            {/* Name */}
            <div className="form-group">
                <input
                    type="text"
                    name="name" // Standard name attribute
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
            </div>
            {/* Email */}
            <div className="form-group">
                 {/* Use 'email' for user's email, or '_replyto' */}
                <input
                    type="email"
                    name="email" // Formspree uses this for the reply-to
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </div>
            {/* Phone (Optional) */}
             <div className="form-group">
                <input
                    type="tel"
                    name="phone" // Custom field name
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (Optional)"
                />
            </div>
             {/* Level/Topic */}
            <div className="form-group">
                <select name="level_or_topic" value={formData.level} onChange={handleChange}> {/* Changed name attribute */}
                    <option value="Level 1 - Beginner">Level 1 - Beginner</option>
                    <option value="Level 2 - Elementary">Level 2 - Elementary</option>
                    <option value="Level 3 - Intermediate">Level 3 - Intermediate</option>
                    <option value="Level 4 - Upper Intermediate">Level 4 - Upper Intermediate</option>
                    <option value="Level 5 - Advanced">Level 5 - Advanced</option>
                    <option value="Other Matters">Other Matters</option>
                </select>
            </div>
             {/* Message */}
            <div className="form-group">
                <textarea
                    name="message" // Standard name attribute
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what you'd like to focus on"
                    rows={5}
                    required
                ></textarea>
            </div>

             {/* Optional: Add a hidden field for subject line */}
             <input type="hidden" name="_subject" value={`New Contact Submission - ${formData.level === 'other' ? 'Other Matters' : `Level ${formData.level}`}`} />

             {/* Submit Button */}
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