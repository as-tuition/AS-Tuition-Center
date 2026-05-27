/* =========================================================
   A.S Tuition Center — FINAL PRODUCTION JS
   Features:
   - Footer year (once, here only)
   - Language toggle with localStorage
   - Dark mode toggle with localStorage
   - Hamburger menu (mobile)
   - Smooth scroll (merged with hamburger close)
   - Button press effect
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // FOOTER YEAR
  // =========================================

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // =========================================
  // LANGUAGE TOGGLE
  // =========================================

  const langToggle = document.getElementById('lang-toggle');
  const translatables = document.querySelectorAll('[data-en]');
  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLanguage() {
    if (langToggle) {
      langToggle.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
    }

    translatables.forEach((el) => {
      const text = el.dataset[currentLang];
      if (!text) return;
      // Update only leaf elements (no child elements)
      if (el.children.length === 0) {
        el.textContent = text;
      }
    });
  }

  applyLanguage();

  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
  });

  // =========================================
  // DARK MODE TOGGLE
  // =========================================

  const darkToggle = document.getElementById('dark-mode-toggle');

  // Apply saved preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkToggle) darkToggle.textContent = '☀️';
  }

  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
  });

  // =========================================
  // HAMBURGER MENU
  // =========================================

  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  function closeMenu() {
    navMenu?.classList.remove('open');
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.textContent = isOpen ? '✕' : '☰';
  });

  // =========================================
  // NAV LINKS — smooth scroll + close menu
  // (single listener handles both)
  // =========================================

  navMenu?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =========================================
  // BUTTON PRESS EFFECT
  // (skip lang-toggle and dark-mode-toggle
  //  to avoid jitter with their own transitions)
  // =========================================

  document.querySelectorAll('button').forEach((btn) => {
    if (btn.id === 'lang-toggle' || btn.id === 'dark-mode-toggle') return;
    btn.addEventListener('click', () => {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => { btn.style.transform = ''; }, 150);
    });
  });

});
