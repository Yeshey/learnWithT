import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <h2>Join a thriving community of satisfied students</h2>
          <div className="divider"></div>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-image">
              {/* Video placeholder */}
              <div className="play-icon"></div>
            </div>
          </div>
          
          <div className="testimonials-group">
            <div className="testimonial-item">
              <blockquote>
                "Since September 2020 I Have Been Learning Portuguese With Ana. Taking Online Sessions And In-Person Classes When Possible. Her Energy, Patience And Good Pace Would Definitely Recommend If You Want To Work On Your Portuguese!""
              </blockquote>
              <cite>Matthijs Poelman</cite>
            </div>
            
            <div className="testimonial-item">
              <blockquote>
                "Dedicated, Kind And Methodical. Ana's Approach To Cover Writing, Listening, Speaking Language Skills. This Lady Knows Exactly What She Is Doing!"
              </blockquote>
              <cite>Melissa Peterson</cite>
            </div>
            
            <div className="testimonial-item">
              <blockquote>
                "Thoroughly Enjoy My Classes With Tânia. Her Cover A Variety In Each Lesson So That We're Always Reading, Writing, Smiling And Speaking Each Time. She Is Very Patient And Always Gives Recommendations And Respect For Foreigners Like Me. Thank You Ana!"
              </blockquote>
              <cite>Georgia Richards</cite>
            </div>
            
            <div className="testimonial-item">
              <blockquote>
                "Ana Is Currently Doing Lessons With Me Via Skype With My 10 Year Old Son. We Are Moving To Portugal In August 2023 And Already He Has Learnt So Much From Her And Is Really Looking Forward To His Lessons Every Week."
              </blockquote>
              <cite>Jenny Thomas</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;