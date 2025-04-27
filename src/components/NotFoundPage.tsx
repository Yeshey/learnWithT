import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'; // Create this CSS file

const NotFoundPage: React.FC = () => {
  return (
    <div className="container not-found-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist or may have been moved.</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;