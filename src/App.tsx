import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
// Removed Services/Testimonials/Library imports as they are part of HomePage
import FAQPage from './components/FAQPage';
import TranslationsPage from './components/TranslationsPage';
import OfferDetailPage from './components/OfferDetailPage'; // Import new component
// Removed Contact import if it's only a section on HomePage

function App() {
  return (
    <BrowserRouter basename="/learnWithT">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* Removed routes for services, testimonials, library, contact if they are now sections */}
          <Route path="faq" element={<FAQPage />} />
          <Route path="translations" element={<TranslationsPage />} />
          {/* Add route for offer details */}
          <Route path="offer/:offerId" element={<OfferDetailPage />} />

          {/* Optional: Redirect old section paths to homepage hashes? */}
          {/* <Route path="services" element={<Navigate to="/#offers" replace />} /> */}
          {/* <Route path="contact" element={<Navigate to="/#contact" replace />} /> */}

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;