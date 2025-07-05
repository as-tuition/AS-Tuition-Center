document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-en]');

    let currentLang = 'en';

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ta' : 'en';
        langToggle.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';

        translatableElements.forEach(el => {
            el.textContent = el.dataset[currentLang];
        });
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});