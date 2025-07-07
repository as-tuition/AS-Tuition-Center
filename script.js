document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-en]');
    const whatsappButton = document.getElementById('whatsapp-button');

    // Load language from localStorage or default to English
    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLanguage() {
        langToggle.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
        translatableElements.forEach(el => {
            el.textContent = el.dataset[currentLang];
        });
    }

    // Apply initial language setting
    updateLanguage();

    // Handle language toggle
    langToggle?.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ta' : 'en';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // WhatsApp button functionality
    whatsappButton?.addEventListener('click', () => {
        window.open("https://wa.me/9524863508", "_blank");
    });
});
