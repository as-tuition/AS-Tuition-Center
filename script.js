document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // LANGUAGE TOGGLE
  // =========================================

  const langToggle =
    document.getElementById('lang-toggle');

  const translatableElements =
    document.querySelectorAll('[data-en]');

  // Default Language
  let currentLang =
    localStorage.getItem('lang') || 'en';

  // Update Language
  function updateLanguage() {

    // Toggle Button Text
    if (langToggle) {

      langToggle.textContent =
        currentLang === 'en'
          ? 'தமிழ்'
          : 'English';

    }

    // Update All Translatable Elements
    translatableElements.forEach((el) => {

      const translatedText =
        el.dataset[currentLang];

      if (translatedText) {

        // Safe Update
        if (el.children.length === 0) {

          el.textContent =
            translatedText;

        }

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

  // =========================================
  // SMOOTH SCROLL
  // =========================================

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

  // =========================================
  // FOOTER YEAR
  // =========================================

  const yearElement =
    document.getElementById('year');

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

  // =========================================
  // DARK MODE SUPPORT
  // =========================================

  const darkModeToggle =
    document.getElementById('dark-mode-toggle');

  // Load Saved Theme
  const savedTheme =
    localStorage.getItem('theme');

  if (savedTheme === 'dark') {

    document.body.classList.add(
      'dark-mode'
    );

  }

  // Dark Mode Toggle
  darkModeToggle?.addEventListener(
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

  // =========================================
  // BUTTON CLICK EFFECT
  // =========================================

  document.querySelectorAll('button')
    .forEach((button) => {

      button.addEventListener(
        'click',
        () => {

          button.style.transform =
            'scale(0.96)';

          setTimeout(() => {

            button.style.transform =
              '';

          }, 150);

        }
      );

    });

  // =========================================
  // PAGE LOADED ANIMATION
  // =========================================

  document.body.style.opacity = '0';

  window.addEventListener('load', () => {

    document.body.style.transition =
      'opacity 0.5s ease';

    document.body.style.opacity = '1';

  });

});
