import React from 'react';
// Import Outlet and ScrollRestoration
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import '../styles/Layout.css';

const Layout: React.FC = () => {
  return (
    <>
      {/* Add ScrollRestoration inside the Layout */}
      <ScrollRestoration />
      <Header />
      <main className="main-content-area">
        <Outlet /> {/* Child routes render here */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;