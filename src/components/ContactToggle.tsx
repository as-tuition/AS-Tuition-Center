import React, { useState } from 'react';
import { MessageSquare, IndianRupee } from 'lucide-react';

const ContactToggle = () => {
  const [selected, setSelected] = useState<'whatsapp' | 'gpay'>('whatsapp');
  const phone = '9524863508';

  const handleClick = () => {
    if (selected === 'whatsapp') {
      window.open(`https://wa.me/91${phone}`, '_blank');
    } else {
      window.open(`upi://pay?pa=${phone}@upi`, '_blank'); // UPI URI
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-3">Quick Contact</h2>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSelected('whatsapp')}
          className={`px-4 py-2 rounded-xl font-semibold shadow-md ${selected === 'whatsapp'
              ? 'bg-blue-800 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          <MessageSquare className="inline-block mr-1" size={18} />
          WhatsApp
        </button>

        <button
          onClick={() => setSelected('gpay')}
          className={`px-4 py-2 rounded-xl font-semibold shadow-md ${selected === 'gpay'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          <IndianRupee className="inline-block mr-1" size={18} />
          GPay
        </button>
      </div>

      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 transition-all"
      >
        {selected === 'whatsapp' ? 'Start WhatsApp Chat' : 'Pay via GPay'}
      </button>
    </div>
  );
};

export default ContactToggle;