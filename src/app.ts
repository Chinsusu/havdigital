import { translations, TranslationLocale } from './translations';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE ---
  let currentLang: 'vi' | 'en' = (localStorage.getItem('lang') as 'vi' | 'en') || 'vi';
  let currentTheme: 'dark' | 'light' = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  // --- DOM ELEMENTS ---
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  const langToggleBtn = document.getElementById('lang-toggle') as HTMLButtonElement | null;
  const hamburgerBtn = document.getElementById('hamburger') as HTMLButtonElement | null;
  const navMenu = document.getElementById('nav-menu') as HTMLElement | null;
  const header = document.getElementById('header') as HTMLElement | null;
  const navLinks = document.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;
  const faqItems = document.querySelectorAll('.faq-item') as NodeListOf<HTMLElement>;
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const formAlert = document.getElementById('form-alert') as HTMLDivElement | null;

  // --- INITIALIZATION ---
  initTheme();
  initLanguage();
  setupNavigation();
  setupFAQ();
  setupContactForm();

  // --- THEME LOGIC ---
  function initTheme() {
    htmlEl.setAttribute('data-theme', currentTheme);
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      });
    }
  }

  // --- TRANSLATION LOGIC ---
  function initLanguage() {
    setLanguage(currentLang);
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'vi' ? 'en' : 'vi';
        setLanguage(nextLang);
      });
    }
  }

  function setLanguage(lang: 'vi' | 'en') {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    htmlEl.setAttribute('lang', lang);

    // Update switcher button text
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'vi' ? 'EN' : 'VI';
      langToggleBtn.setAttribute('aria-label', lang === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    }

    // Translate standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n') as keyof TranslationLocale | null;
      if (key && translations[lang]) {
        const translationText = translations[lang][key];
        
        if (translationText) {
          const svgIcon = el.querySelector('svg');
          if (svgIcon) {
            el.innerHTML = '';
            el.appendChild(svgIcon);
            el.appendChild(document.createTextNode(' ' + translationText));
          } else {
            el.textContent = translationText;
          }
        }
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder') as keyof TranslationLocale | null;
      if (key && translations[lang]) {
        const translationText = translations[lang][key];
        if (translationText) {
          el.setAttribute('placeholder', translationText);
        }
      }
    });
  }

  // --- NAVIGATION LOGIC ---
  function setupNavigation() {
    // Header background change on scroll
    window.addEventListener('scroll', () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      highlightNavLink();
    });

    // Mobile Hamburger Toggle
    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
      });
    }

    // Close menu when clicking navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (hamburgerBtn) hamburgerBtn.classList.remove('open');
        if (navMenu) navMenu.classList.remove('open');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Highlight menu link on scroll
    function highlightNavLink() {
      let scrollPosition = window.scrollY + 100;
      const sections = ['hero', 'services', 'features', 'faq', 'contact'];
      
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        }
      });
    }
  }

  // --- FAQ LOGIC ---
  function setupFAQ() {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question') as HTMLButtonElement | null;
      const answer = item.querySelector('.faq-answer') as HTMLElement | null;
      
      if (question && answer) {
        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('open');
            const otherAnswer = otherItem.querySelector('.faq-answer') as HTMLElement | null;
            if (otherAnswer) {
              otherAnswer.style.maxHeight = '';
            }
          });
          
          if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        });
      }
    });
  }

  // --- CONTACT FORM LOGIC ---
  function setupContactForm() {
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        if (!submitBtn) return;
        
        const originalText = submitBtn.textContent || '';
        
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'vi' ? 'Đang gửi...' : 'Sending...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          
          if (formAlert) {
            formAlert.className = 'form-alert success';
            formAlert.textContent = translations[currentLang].formSuccess;
            formAlert.style.display = 'block';
            formAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          
          contactForm.reset();
        }, 1200);
      });
    }
  }
});
