import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '1',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application you would send this data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      level: '1',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h2>Let's Connect</h2>
          <div className="divider"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'd love to hear from you! Whether you have questions about my classes, want to schedule a lesson, or just want to chat about learning Portuguese, feel free to reach out.</p>
            
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-envelope"></i></span>
              <a href="mailto:tania.jmsa@gmail.com">tania.jmsa@gmail.com</a>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-phone"></i></span>
              <a href="tel:+351913386788">+351 913 386 788</a>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-map-marker-alt"></i></span>
              <p>Funchal, Madeira Island, Portugal</p>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/351913386788" className="social-link"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Book Your Lesson</h3>
            <p>1 on 1, 1 on 2 - 10 minutes trial lessons!</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Phone" 
                />
              </div>
              
              <div className="form-group">
                <select 
                  name="level" 
                  value={formData.level} 
                  onChange={handleChange}
                >
                  <option value="1">Level 1 - Beginner</option>
                  <option value="2">Level 2 - Elementary</option>
                  <option value="3">Level 3 - Intermediate</option>
                  <option value="4">Level 4 - Upper Intermediate</option>
                  <option value="5">Level 5 - Advanced</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell me what you'd like to focus on" 
                  rows={5}
                ></textarea>
              </div>
              
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