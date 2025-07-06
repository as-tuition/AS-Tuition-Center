import React from 'react';

const LocationSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Location</h2>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=10.578417,77.359806&z=17&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="AS Tuition Center Location"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationSection;