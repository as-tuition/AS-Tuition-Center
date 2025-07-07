import React from 'react';
import { MessageSquare, Phone, IndianRupee } from 'lucide-react';

const ContactButtons = () => {
  const phone = '9524863508';

  return (
    <div className="contact-buttons">
      <a href="tel:9524863508" className="action-button call">
        <Phone className="inline-block mr-1" size={18} /> Call Now
      </a>
      <a href="https://wa.me/919524863508" className="action-button whatsapp" target="_blank" rel="noopener noreferrer">
        <MessageSquare className="inline-block mr-1" size={18} /> WhatsApp Us
      </a>
      <a href="upi://pay?pa=9524863508@okicici&pn=AS%20Tuition%20Center" className="action-button gpay">
        <IndianRupee className="inline-block mr-1" size={18} /> Pay with GPay
      </a>
    </div>
  );
};

export default ContactButtons;