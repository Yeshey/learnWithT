import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import '../styles/Layout.css'; // Create this CSS file

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      {/* Apply padding style via CSS class */}
      <main className="main-content-area">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;