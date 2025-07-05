import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaChalkboardTeacher } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing motion for animations

const translations = {
  en: {
    title: "A.S Tuition Centre",
    courses: "Courses",
    timings: "Timings",
    staff: "Staff",
    contact: "Contact",
    heroTitle: "Empowering Young Minds",
    heroSubtitle: "LKG to 12th | Concept-Based Learning | Daily Videos | WhatsApp Doubts",
    callNow: "Call Now",
    coursesOffered: "Courses Offered",
    courseList: [
      "LKG to 12th Standard (State Board & CBSE)",
      "Tamil, English, Mathematics, Science, Social Science",
      "Physics, Chemistry, Biology, Computer Science",
      "Commerce, Accountancy, Economics"
    ],
    classTimings: "Class Timings",
    weekdays: "Weekdays: 4:00 PM – 9:00 PM",
    sunday: "Sunday: 4:00 AM – 8:00 PM , only 10th and 12th",
    specialBatches: "Special Revision Batches During Exams",
    ourStaff: "Our Staff",
    staff1: "Mr. Aravindh.M - M.E 8+ years experience ,All subjects",
    staff2: "Mrs. Sangeetha.A -MSc – Science & Math ,Commerce & AccountancyExpert",
    contactUs: "Contact Us",
    call: "Call",
    whatsapp: "WhatsApp",
    location: "Location: Kaliyamman Kovil Street, Vedapatti, Madathukulam",
    messageUs: "Message Us",
    footer: "© 2025 A.S Tuition Centre. All rights reserved."
  },
  ta: {
    title: "ஏ.எஸ் பயிற்சி மையம்",
    courses: "படிப்புகள்",
    timings: "நேரம்",
    staff: "ஊழியர்கள்",
    contact: "தொடர்பு",
    heroTitle: "இளம் மனங்களை மேம்படுத்துதல்",
    heroSubtitle: "LKG முதல் 12 ஆம் வகுப்பு வரை | கருத்து அடிப்படையிலான கற்றல் | தினசரி வீடியோக்கள் | வாட்ஸ்அப் சந்தேகங்கள்",
    callNow: "இப்போது அழைக்கவும்",
    coursesOffered: "வழங்கப்படும் படிப்புகள்",
    courseList: [
      "LKG முதல் 12 ஆம் வகுப்பு வரை (மாநில வாரியம் & சிபிஎஸ்இ)",
      "தமிழ், ஆங்கிலம், கணிதம், அறிவியல், சமூக அறிவியல்",
      "இயற்பியல், வேதியியல், உயிரியல், கணினி அறிவியல்",
      "வர்த்தகம், கணக்கியல், பொருளாதாரம்"
    ],
    classTimings: "வகுப்பு நேரங்கள்",
    weekdays: "வார நாட்கள்: மாலை 4:00 - இரவு 9:00",
    sunday: "ஞாயிறு: காலை 4:00 - இரவு 8:00, 10 மற்றும் 12 ஆம் வகுப்புகளுக்கு மட்டும்",
    specialBatches: "தேர்வுகளின் போது சிறப்பு திருப்புதல் வகுப்புகள்",
    ourStaff: "எங்கள் ஊழியர்கள்",
    staff1: "திரு. அரவிந்த்.எம் - எம்.இ 8+ வருட அனுபவம், அனைத்து பாடங்களும்",
    staff2: "திருமதி. சங்கீதா.ஏ - எம்எஸ்சி - அறிவியல் & கணிதம், வர்த்தகம் & கணக்கியல் நிபுணர்",
    contactUs: "தொடர்பு கொள்ளவும்",
    call: "அழைப்பு",
    whatsapp: "வாட்ஸ்அப்",
    location: "இடம்: காளியம்மன் கோவில் தெரு, வேடபட்டி, மடத்துக்குளம்",
    messageUs: "செய்தி அனுப்பவும்",
    footer: "© 2025 ஏ.எஸ் பயிற்சி மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  }
};

// Main functional component for the tuition homepage
export default function Home() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ta' : 'en'));
  };

  const t = translations[language];

  return (
    <div className="font-sans bg-gradient-to-br from-blue-900 to-blue-700 text-white min-h-screen">
      
      {/* Header section with logo and navigation links */}
      <header className="p-4 flex justify-between items-center bg-blue-950 shadow-md">
        <div className="flex items-center gap-2">
          {/* Tuition logo */}
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">{t.title}</h1>
        </div>

        {/* Navigation links to page sections */}
        <nav className="space-x-4 text-sm">
          <a href="#courses" className="hover:underline">{t.courses}</a>
          <a href="#timings" className="hover:underline">{t.timings}</a>
          <a href="#staff" className="hover:underline">{t.staff}</a>
          <a href="#contact" className="hover:underline">{t.contact}</a>
          <button onClick={toggleLanguage} className="ml-4 px-2 py-1 bg-yellow-400 text-black rounded">
            {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
        </nav>
      </header>

      {/* Hero / Intro section with entrance animation */}
      <motion.section 
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -20 }} // Start slightly above and transparent
        animate={{ opacity: 1, y: 0 }}    // Animate to visible and positioned
        transition={{ duration: 0.8 }}    // Smooth entrance over 0.8 seconds
      >
        <h2 className="text-3xl font-bold mb-2">{t.heroTitle}</h2>
        <p className="text-lg">
          {t.heroSubtitle}
        </p>

        {/* Call to Action Button */}
        <a 
          href="tel:9524863508" 
          className="inline-block mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300"
        >
          {t.callNow}
        </a>
      </motion.section>

      {/* Section: Courses Offered */}
      <section id="courses" className="px-4 py-8 bg-blue-800">
        <h3 className="text-2xl font-bold mb-4">{t.coursesOffered}</h3>
        <ul className="list-disc list-inside text-sm leading-relaxed">
          {t.courseList.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Section: Timings */}
      <section id="timings" className="px-4 py-8">
        <h3 className="text-2xl font-bold mb-4">{t.classTimings}</h3>
        <p>{t.weekdays}</p>
        <p>{t.sunday}</p>
        <p>{t.specialBatches}</p>
      </section>

      {/* Section: Staff Details */}
      <section id="staff" className="px-4 py-8 bg-blue-800">
        <h3 className="text-2xl font-bold mb-4">‍ {t.ourStaff}</h3>
        <ul className="text-sm space-y-1">
          {/* Each teacher entry has an icon and their info */}
          <li><FaChalkboardTeacher className="inline mr-2"/>{t.staff1}</li>
          <li><FaChalkboardTeacher className="inline mr-2"/>{t.staff2}</li>
        </ul>
      </section>

      {/* Section: Contact Info + Map */}
      <section id="contact" className="px-4 py-8">
        <h3 className="text-2xl font-bold mb-4">{t.contactUs}</h3>

        {/* Contact details with phone, WhatsApp, and location */}
        <p><FaPhone className="inline mr-2"/>{t.call}: <a href="tel:9524863508" className="underline">9524863508</a></p>
        <p><FaWhatsapp className="inline mr-2"/>{t.whatsapp}: <a href="https://wa.me/919524863508" className="underline">{t.messageUs}</a></p>
        <p><FaMapMarkerAlt className="inline mr-2"/>{t.location}</p>

        {/* Embedded Google Map with coordinates */}
        <iframe 
          title="Google Map" 
          src="https://www.google.com/maps?q=10.578389,77.359778&z=16&output=embed" 
          className="w-full h-64 mt-4 border-0 rounded-xl"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-xs text-white/70 py-4 bg-blue-950">
        {t.footer}
      </footer>
    </div>
  );
}
