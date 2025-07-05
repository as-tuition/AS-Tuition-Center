document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-en]');

    let currentLang = 'en';

    // Initial translation based on default language
    translatableElements.forEach(el => {
        el.textContent = el.dataset[currentLang];
    });

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

    // WhatsApp Button functionality (already present in your previous script)
    document.getElementById("whatsapp-button")?.addEventListener("click", function () {
        window.open("https://wa.me/9524863508", "_blank");
    });
});