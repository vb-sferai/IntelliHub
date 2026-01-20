// Main JavaScript для лендинга AI SEO (Gifts)

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация всех компонентов
  initSmoothScroll();
  initAnalytics();
});

/* ============================================
   Smooth Scroll для якорных ссылок
   ============================================ */
const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
};

/* ============================================
   Analytics Events (Google Analytics)
   ============================================ */
const initAnalytics = () => {
  // Отслеживание кликов на CTA
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const location = e.target.closest('section')?.id || 'unknown';
      const buttonText = e.target.textContent?.trim() || 'unknown';
      trackEvent('cta_click', { location, button_text: buttonText });
    });
  });

  // Отслеживание кликов на карточки материалов
  document.querySelectorAll('.material-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.material-title')?.textContent || 'unknown';
      trackEvent('material_click', { material_title: title });
    });
  });

  // Отслеживание scroll depth
  let scrollDepths = [25, 50, 75, 100];
  let trackedDepths = new Set();

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackEvent('scroll_depth', { depth: `${depth}%` });
      }
    });
  });
};

const trackEvent = (eventName, eventParams = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
  console.log('Event tracked:', eventName, eventParams);
};
