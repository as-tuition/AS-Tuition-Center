document.addEventListener('DOMContentLoaded', () => {

  // Language Toggle
  const langToggle = document.getElementById('lang-toggle');

  // All Translatable Elements
  const translatableElements =
    document.querySelectorAll('[data-en]');

  // Default Language
  let currentLang =
    localStorage.getItem('lang') || 'en';

  // Update Language
  function updateLanguage() {

    // Toggle Button Text
    langToggle.textContent =
      currentLang === 'en'
      ? 'தமிழ்'
      : 'English';

    // Update Elements
    translatableElements.forEach(el => {

      if (el.dataset[currentLang]) {

        el.textContent =
          el.dataset[currentLang];

      }

    });

  }

  // Initial Load
  updateLanguage();

  // Toggle Event
  langToggle?.addEventListener('click', () => {

    currentLang =
      currentLang === 'en'
      ? 'ta'
      : 'en';

    localStorage.setItem(
      'lang',
      currentLang
    );

    updateLanguage();

  });

  // Smooth Scroll Navigation
  document.querySelectorAll(
    'nav a[href^="#"]'
  ).forEach(anchor => {

    anchor.addEventListener('click', function(e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute('href')
        );

      if (target) {

        target.scrollIntoView({
          behavior: 'smooth'
        });

      }

    });

  });

});
