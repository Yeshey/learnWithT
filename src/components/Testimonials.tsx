import React from 'react';
import '../styles/Testimonials.css'; // Ensure this CSS is updated

const Testimonials: React.FC = () => {
  return (
    // Removed outer <section> tag, HomePage.tsx provides wrapper <section id="stories">
     <div className="container testimonials-container"> {/* Added specific container class */}
        <div className="section-heading">
          <h2>Join a thriving community of satisfied students</h2>
          <div className="divider"></div>
        </div>

        <div className="testimonials-grid">
          {/* Simplified Image Container */}
          <div className="testimonial-image-container">
            {/* Background image handled by CSS */}
          </div>

          {/* Text Testimonials */}
          <div className="testimonials-group">
             {/* Item 1 */}
            <div className="testimonial-item">
              <blockquote>
                "Tânia has been patient and thorough in both our online and face-to-face lessons and I now have my CIPLE certificate!"
              </blockquote>
              <cite>Tim Dixon</cite>
            </div>
             {/* ... other testimonial items ... */}
             <div className="testimonial-item">
                 <blockquote>"We have been thinking about learning Portuguese for many years and we finally plucked up the courage to try. Tania has been very patient with us and although we are finding the learning a challenge, we are very pleased that we have made good progress so far."</blockquote><cite>Peter & Christine</cite>
             </div>
             <div className="testimonial-item">
                 <blockquote>"Thoroughly Enjoy My Classes With Tânia..."</blockquote><cite>...</cite>
             </div>
              <div className="testimonial-item">
                 <blockquote>"Tânia Is Currently Doing Lessons With Me Via Skype..."</blockquote><cite>...</cite>
             </div>
          </div>
        </div>
    </div>
  );
};

export default Testimonials;