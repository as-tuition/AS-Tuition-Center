document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // Language Toggle
  // =========================

  const langToggle =
    document.getElementById('lang-toggle');

  const translatableElements =
    document.querySelectorAll('[data-en]');

  // Default Language
  let currentLang =
    localStorage.getItem('lang') || 'en';

  // Update Language Function
  function updateLanguage() {

    // Update Toggle Button Text
    if (langToggle) {

      langToggle.textContent =
        currentLang === 'en'
        ? 'தமிழ்'
        : 'English';

    }

    // Update All Elements
    translatableElements.forEach((el) => {

      const translatedText =
        el.dataset[currentLang];

      if (translatedText) {

        // Preserve button/icon spacing safely
        if (
          el.children.length === 0
        ) {

          el.textContent =
            translatedText;

        }

      }

    });

  }

  // Initial Load
  updateLanguage();

  // Toggle Button Click
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

  // =========================
  // Smooth Scroll
  // =========================

  document.querySelectorAll(
    'nav a[href^="#"]'
  ).forEach((anchor) => {

    anchor.addEventListener(
      'click',
      function (e) {

        e.preventDefault();

        const targetId =
          this.getAttribute('href');

        const target =
          document.querySelector(targetId);

        if (target) {

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }

      }
    );

  });

  // =========================
  // Dynamic Footer Year
  // =========================

  const yearElement =
    document.getElementById('year');

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

  // =========================
  // Future Dark Mode Support
  // (No Conflict)
  // =========================

  const darkModeToggle =
    document.getElementById('dark-mode-toggle');

  if (darkModeToggle) {

    const savedTheme =
      localStorage.getItem('theme');

    if (savedTheme === 'dark') {

      document.body.classList.add('dark-mode');

    }

    darkModeToggle.addEventListener(
      'click',
      () => {

        document.body.classList.toggle(
          'dark-mode'
        );

        const isDark =
          document.body.classList.contains(
            'dark-mode'
          );

        localStorage.setItem(
          'theme',
          isDark ? 'dark' : 'light'
        );

      }
    );

  }

});
