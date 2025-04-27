import React, { useState, useEffect } from 'react';

interface ConditionalPhoneLinkProps {
  displayPhone: string; // The text to display (e.g., "+351 913...")
  telLink: string;      // The full tel: link (e.g., "tel:+351913...")
  whatsappUrl: string;  // The full WhatsApp URL (e.g., "https://wa.me/...")
  className?: string;   // Optional CSS class from parent
}

const ConditionalPhoneLink: React.FC<ConditionalPhoneLinkProps> = ({
  displayPhone,
  telLink,
  whatsappUrl,
  className = '' // Default to empty string if not provided
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect mobile based on window width
  useEffect(() => {
    const checkMobile = () => {
      // You can adjust the breakpoint (768) if needed
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile); // Check on resize

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency array means run only on mount and unmount

  // Determine the href and target based on mobile state
  const linkHref = isMobile ? telLink : whatsappUrl;
  const linkTarget = isMobile ? '_self' : '_blank';

  return (
    <a
      href={linkHref}
      target={linkTarget}
      // Only add rel="noopener noreferrer" for non-mobile (WhatsApp) link
      rel={!isMobile ? 'noopener noreferrer' : undefined}
      className={className} // Apply className passed from parent
    >
      {displayPhone} {/* Display the formatted phone number */}
    </a>
  );
};

export default ConditionalPhoneLink;