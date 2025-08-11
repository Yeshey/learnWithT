import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/OfferDetailPage.css'; // Create this CSS file

// Define the data structure with 'description' as a React.ReactNode
const offerDetailsData: { [key: string]: { title: string; description: React.ReactNode; image?: string } } = {
    'group-funchal': {
        title: "15 Minutes Free Demo Session",
        description: (
            <>
                <p>
                    This complimentary 15-minute session is the perfect opportunity for us to get to know each other. We can discuss your learning goals, assess your current level, and I can answer any questions you may have. It's a great way to experience my teaching style and see if we're a good fit, with no obligation.
                </p>
                <p>
                  For more details on pricing and packages, please visit <HashLink to="/faq#prices">FAQ: Prices & Plans</HashLink>.
                </p>
            </>
        ),
        // image: "path/to/funchal-group.jpg"
    },
    'group-online': {
        title: "Group & Corporate Sessions & More",
        description: (
             <>
                <p>
                    Whether you're a group wanting to learn together or a company looking to provide language training for your employees, I can create a custom program to fit your needs.
                </p>
                <p>
                    Due to the unique requirements of each group, pricing is provided on a case-by-case basis. Please <HashLink to="/#contact">contact me</HashLink> with details about your group size, learning objectives, and desired schedule, and I will be happy to provide a personalized quote!
                </p>
            </>
        ),
        // image: "path/to/online-group.jpg"
    },
    'private-1on1': {
        title: "Online 1-on-1 Sessions",
        description: (
            <>
                <p>
                    Receive my undivided attention and a personalized learning plan with private 1-on-1 sessions. These lessons are tailored to your specific needs, whether you're a complete beginner or an advanced learner looking to perfect your fluency.
                </p>
                <p>
                    For more details on pricing and packages, please visit <HashLink to="/faq#prices">FAQ: Prices & Plans</HashLink>.
                </p>
            </>
        ),
         // image: "path/to/1on1.jpg"
    },
     'private-1on2': {
        title: "Online 1-on-2 Sessions",
        description: (
            <>
                <p>
                    Learn Portuguese with a friend, partner, or colleague in a 1-on-2 session. This option combines the benefits of personalized attention with the fun of learning together. It's a cost-effective way to get more focused instruction while still having a partner to practice with. The lessons are designed to accommodate the learning pace of both students.
                </p>
                <p>
                    For more details on pricing and packages, please visit <HashLink to="/faq#prices">FAQ: Prices & Plans</HashLink>.
                </p>
            </>
        ),
         // image: "path/to/1on2.jpg"
    }
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
           {/* Render the description which now contains JSX */}
           {details.description}

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