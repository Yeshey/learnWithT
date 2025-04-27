// src/config/contactInfo.ts
export const contactInfo = {
    phone: '+351 913 386 788',
    phoneDigits: '351913386788', // For wa.me link
    email: 'tania.jmsa@gmail.com',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100000535254646',
    instagramUrl: 'https://www.instagram.com/tania.jmsalm/',
    linkedinUrl: 'https://www.linkedin.com/in/jo%C3%A3o-filipe-almeida/', // Note: This seems like a different person's LinkedIn? Please verify.
    whatsappUrl: 'https://wa.me/351913386788', // Use phoneDigits here
    location: 'Funchal, Madeira Island, Portugal'
  };
  
  // Update whatsappUrl to use phoneDigits
  contactInfo.whatsappUrl = `https://wa.me/${contactInfo.phoneDigits}`;