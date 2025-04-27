import React from 'react';
import '../styles/Testimonials.css'; // Rename this maybe? Keep for now.

// import testimonialVideoPlaceholder from '../assets/images/testimonial-video.jpg'; // Ensure path is correct

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-page" id="testimonials"> {/* Changed class, keep id */}
      <div className="container">
        <div className="section-heading">
          {/* Content moved from original Services.tsx */}
          <h2>Join a thriving community of satisfied students</h2>
          <div className="divider"></div>
        </div>

        <div className="testimonials-grid">
          {/* Video Card - Consider making this a real video or image link */}
          <div className="testimonial-card">
            <div className="testimonial-video-container">
              {/* You might want an actual image or video embed here */}
              <div className="testimonial-image-placeholder">
                 {/* <img src={testimonialVideoPlaceholder} alt="Testimonial video placeholder" /> */}
                 <div className="play-icon"></div>
              </div>
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="testimonials-group">
            {/* Item 1 */}
            <div className="testimonial-item">
              <blockquote>
                "Since September 2020 I Have Been Learning Portuguese With Tânia. Taking Online Sessions And In-Person Classes When Possible. Her Energy, Patience And Good Pace Would Definitely Recommend If You Want To Work On Your Portuguese!" {/* Corrected teacher name */}
              </blockquote>
              <cite>Matthijs Poelman</cite>
            </div>
            {/* Item 2 */}
            <div className="testimonial-item">
              <blockquote>
                "Dedicated, Kind And Methodical. Tânia's Approach To Cover Writing, Listening, Speaking Language Skills. This Lady Knows Exactly What She Is Doing!" {/* Corrected teacher name */}
              </blockquote>
              <cite>Melissa Peterson</cite>
            </div>
             {/* Item 3 */}
            <div className="testimonial-item">
               <blockquote>
                "Thoroughly Enjoy My Classes With Tânia. Her Cover A Variety In Each Lesson So That We're Always Reading, Writing, Smiling And Speaking Each Time. She Is Very Patient And Always Gives Recommendations And Respect For Foreigners Like Me. Thank You Tânia!" {/* Corrected teacher name */}
              </blockquote>
              <cite>Georgia Richards</cite>
            </div>
            {/* Item 4 */}
            <div className="testimonial-item">
              <blockquote>
                "Tânia Is Currently Doing Lessons With Me Via Skype With My 10 Year Old Son. We Are Moving To Portugal In August 2023 And Already He Has Learnt So Much From Her And Is Really Looking Forward To His Lessons Every Week." {/* Corrected teacher name */}
              </blockquote>
              <cite>Jenny Thomas</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;