import React from 'react';
import LocationSection from './components/LocationSection';
import ContactButtons from './components/ContactToggle';
import StaffSection from './components/StaffSection';

function App() {
  return (
    <div>
      {/* Other sections */}
      <LocationSection />
      <ContactButtons />
      <StaffSection />
    </div>
  );
}

export default App;
