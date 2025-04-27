import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/OfferDetailPage.css'; // Create this CSS file
import { HashLink } from 'react-router-hash-link';

// Define potential offer data structure (replace with actual data source/logic)
const offerDetailsData: { [key: string]: { title: string; description: string; image?: string } } = {
    'group-funchal': {
        title: "Live/Online Group Sessions (Funchal)",
        description: "Detailed description about the group sessions held physically in Funchal or joined digitally. Focus on the hybrid aspect, community building in person/online, target levels, typical schedule, benefits of local interaction combined with online flexibility.",
        // image: "path/to/funchal-group.jpg"
    },
    'group-online': {
        title: "Online Group Sessions",
        description: "Detailed description about purely online group sessions. Focus on the mini-community aspect (3-6 students), benefits of diverse participants, session structure, platforms used (Zoom/Jitsi), suitable levels, how interaction is fostered online.",
        // image: "path/to/online-group.jpg"
    },
    'private-1on1': {
        title: "Online 1-on-1 Sessions",
        description: "Detailed description about private 1-on-1 lessons. Focus on personalization, tailoring to individual goals (levels 1-5, intensive options), learning pace, direct feedback, flexibility in scheduling, ideal for specific needs or faster progress.",
         // image: "path/to/1on1.jpg"
    },
     'private-1on2': {
        title: "Online 1-on-2 Sessions",
        description: "Detailed description about lessons for pairs. Focus on learning with a friend/partner, balancing two students' needs, collaborative exercises, cost-effectiveness compared to 1-on-1, recommended session frequency.",
         // image: "path/to/1on2.jpg"
    }
    // Add more offers if needed
};


const OfferDetailPage: React.FC = () => {
  const { offerId } = useParams<{ offerId: string }>(); // Get offerId from URL
  const details = offerId ? offerDetailsData[offerId] : null;

  if (!details) {
    // Handle case where offerId is invalid or not found
    return (
      <div className="container offer-detail-page">
        <h2>Offer Not Found</h2>
        <p>The requested offer details could not be found.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="offer-detail-page">
       {/* Optional Hero/Banner for the Offer */}
       <div className="offer-hero">
            {/* {details.image && <img src={details.image} alt={details.title} className="offer-hero-image"/>} */}
            <div className="container">
                <h1>{details.title}</h1>
            </div>
       </div>

       {/* Main content */}
       <div className="container offer-content">
           <p>{details.description}</p>
            {/* Add more details like schedule, pricing summary, prerequisites etc. */}

           {/* Call to Action */}
           <div className="offer-cta">
             <h3>Interested in this offer?</h3>
             <p>Book a free trial lesson or get in touch to ask questions!</p>
             {/* Link or HashLink to contact section */}
             <HashLink smooth to="/#contact" className="btn">Contact Tânia</HashLink>
           </div>
       </div>
    </div>
  );
};

export default OfferDetailPage;