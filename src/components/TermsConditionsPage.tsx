import React from 'react';
import '../styles/TermsConditionsPage.css'; // Create this CSS file

const TermsConditionsPage: React.FC = () => {
  return (
    <section className="terms-page">
      <div className="container">
        <div className="section-heading">
          <h2>Terms & Conditions</h2>
          <div className="divider"></div>
        </div>

        <div className="terms-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing this website and using the services offered by Tânia Almeida ("the Teacher"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website or the services.</p>

          <h3>2. Services</h3>
          <p>The Teacher provides Portuguese language lessons (online and in-person), and related resources as described on the website. Service details, including duration, format, and pricing, are subject to change and will be confirmed upon booking or inquiry.</p>

          <h3>3. Bookings and Payment</h3>
          <p>Lessons must be booked in advance. Payment details and schedules will be provided upon confirmation. Accepted payment methods include Bank Transfer or MBway. Full payment or agreed-upon installments are required before sessions commence unless otherwise agreed.</p>

          <h3>4. Cancellations and Rescheduling</h3>
          <p>Clients must provide at least 24 hours' notice for cancellations or rescheduling requests. Failure to provide sufficient notice may result in the session being charged. The Teacher reserves the right to reschedule sessions due to unforeseen circumstances, providing as much notice as possible.</p>

          <h3>5. Confidentiality</h3>
          <p>All personal information and materials shared during lessons will be treated with the utmost confidentiality.</p>

          <h3>6. Intellectual Property</h3>
          <p>All teaching materials produced by the Teacher are protected by copyright and are for the client's personal educational use only. They may not be reproduced, distributed, or shared without explicit written permission.</p>

          <h3>7. Code of Conduct</h3>
          <p>All participants are expected to maintain a respectful and positive learning environment. The Teacher reserves the right to terminate services without refund if a client's behavior is deemed inappropriate or disruptive.</p>

          <h3>8. Limitation of Liability</h3>
          <p>While the Teacher strives to provide high-quality services, no guarantee of specific language proficiency levels or outcomes can be made, as progress depends significantly on individual effort and circumstances. The Teacher is not liable for any indirect or consequential damages arising from the use of the services.</p>

          <h3>9. Changes to Terms</h3>
          <p>The Teacher reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Continued use of the website or services after changes constitutes acceptance of the revised terms.</p>

          <h3>10. Governing Law</h3>
          <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Portugal.</p>

          {/* Add last updated date */}
          <p><em>Last Updated: August 10, 2025</em></p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionsPage;