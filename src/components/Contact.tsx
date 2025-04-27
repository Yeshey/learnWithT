import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../config/contactInfo';
import ConditionalPhoneLink from './ConditionalPhoneLink'; // Import the new component
import '../styles/Contact.css';

const Contact: React.FC = () => {
    // ... (useState, handleChange, handleSubmit) ...
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', level: '1', message: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { const { name, value } = e.target; setFormData(prevState => ({ ...prevState, [name]: value })); };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); console.log('Form submitted:', formData); setFormData({ name: '', email: '', phone: '', level: '1', message: '' }); alert('Thank you for your message! I will get back to you soon.'); };

    return (
        <div className="container contact-container-inner">
            {/* ... heading ... */}
            <div className="section-heading"> <h2>Let's Connect</h2> <div className="divider"></div> </div>

            <div className="contact-grid">
                <div className="contact-info">
                    {/* ... heading, paragraph ... */}
                    <h3>Get In Touch</h3> <p>I'd love to hear from you! ...</p>

                    <div className="info-item">
                        <span className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>

                    <div className="info-item">
                        <span className="info-icon"><FontAwesomeIcon icon={faPhone} /></span>
                        {/* Use the new component */}
                        <ConditionalPhoneLink
                          displayPhone={contactInfo.phone}
                          telLink={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                          whatsappUrl={contactInfo.whatsappUrl}
                          className="contact-info-phone-link" // Add specific class if needed
                        />
                    </div>

                    <div className="info-item">
                        <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                        <p>{contactInfo.location}</p>
                    </div>
                    {/* ... social links ... */}
                     <div className="social-links"> <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a> <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a> <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a> <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a> </div>
                </div>
                {/* ... contact form ... */}
                <div className="contact-form"> <h3>Book Your Lesson</h3> <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p> <form onSubmit={handleSubmit}> <div className="form-group"><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /></div> <div className="form-group"><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /></div> <div className="form-group"><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /></div> <div className="form-group"><select name="level" value={formData.level} onChange={handleChange}><option value="1">Level 1 - Beginner</option><option value="2">Level 2 - Elementary</option><option value="3">Level 3 - Intermediate</option><option value="4">Level 4 - Upper Intermediate</option><option value="5">Level 5 - Advanced</option></select></div> <div className="form-group"><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me what you'd like to focus on" rows={5}></textarea></div> <button type="submit" className="btn">Send Message</button> </form> <p className="form-note">Or WhatsApp me directly to book your class!</p> </div>
            </div>
        </div>
    );
};

export default Contact;