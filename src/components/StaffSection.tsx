import React from 'react';

const staffList = [
  {
    name: "Mr. ARAVINDH M",
    qualification: "M.E",
    subject: "All Subjects"
  },
  {
    name: "Mrs. SANGEETHA A",
    qualification: "M.Sc",
    subject: "All Subjects (except Computer Science)"
  }
];

const StaffSection = () => {
  return (
    <section>
      <h2>எங்கள் ஆசிரியர்கள்</h2>
      <div className="staff-grid">
        {staffList.map((staff, index) => (
          <div className="staff-card" key={index}>
            <h3>{staff.name}</h3>
            <p><strong>Qualification:</strong> {staff.qualification}</p>
            <p><strong>Subjects:</strong> {staff.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;