import React from 'react';
import { MessageSquare, Phone, IndianRupee } from 'lucide-react';

const ContactButtons = () => {
  const phone = '9524863508';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phone}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${phone}`);
  };

  const handleGPay = () => {
    window.open(`upi://pay?pa=${phone}@upi`, '_blank'); // UPI URI
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-3">Quick Contact</h2>

      <div className="flex flex-wrap justify-center space-x-4 mb-4">
        <button onClick={handleWhatsApp} className="action-button whatsapp">
          <MessageSquare className="inline-block mr-1" size={18} /> WhatsApp Us
        </button>

        <button onClick={handleCall} className="action-button call-button">
          <Phone className="inline-block mr-1" size={18} /> Call Now
        </button>

        <button onClick={handleGPay} className="action-button gpay-button">
          <IndianRupee className="inline-block mr-1" size={18} /> Pay with GPay
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;