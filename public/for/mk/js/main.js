// Main JavaScript для лендинга AI-программы Мужского клуба

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация всех компонентов
  initSmoothScroll();
  initFAQ();
  initModules();
  initOutcomes();
  initTargetAudience();
  initInterestsToggle();
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
      
      const headerOffset = 80;
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
   FAQ Аккордеон
   ============================================ */
const initFAQ = () => {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;
  
  // Проверяем, что данные FAQ загружены
  if (typeof faqItems === 'undefined') {
    console.error('FAQ data not loaded');
    return;
  }
  
  // Генерируем HTML для FAQ
  const faqHTML = faqItems.map(item => `
    <div class="faq-item" data-faq-id="${item.id}">
      <button 
        class="faq-question" 
        type="button"
        aria-expanded="false"
        aria-controls="faq-answer-${item.id}"
      >
        <span>${item.question}</span>
        <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="faq-answer" id="faq-answer-${item.id}">
        <div class="faq-answer-content">
          <p>${item.answer}</p>
        </div>
      </div>
    </div>
  `).join('');
  
  faqList.innerHTML = faqHTML;
  
  // Добавляем обработчики для аккордеона
  const faqItems_elements = faqList.querySelectorAll('.faq-item');
  
  faqItems_elements.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Закрываем все остальные
      faqItems_elements.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherQuestion = otherItem.querySelector('.faq-question');
          otherQuestion.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Переключаем текущий
      if (isActive) {
        item.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

/* ============================================
   Динамическая загрузка дополнительных модулей
   ============================================ */
const initModules = () => {
  const modulesGrid = document.getElementById('modules-grid');
  if (!modulesGrid) return;
  
  // Проверяем, что данные модулей загружены
  if (typeof modules === 'undefined') {
    console.error('Modules data not loaded');
    return;
  }
  
  // Генерируем HTML для дополнительных модулей
  const modulesHTML = modules.additional.map(module => `
    <div class="module-card" style="border-color: ${module.color}20">
      <div class="module-card-header">
        <div class="module-card-icon" style="background-color: ${module.color}15; color: ${module.color}">
          ${getIconSVG(module.icon)}
        </div>
        <div class="module-card-info">
          <h4 class="module-card-title">${module.title}</h4>
          <p class="module-card-subtitle">${module.subtitle}</p>
        </div>
      </div>
      <p class="module-card-description">${module.description}</p>
      <ul class="module-card-topics">
        ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
      </ul>
      <div class="module-card-footer">
        <span class="module-card-duration">${module.duration}</span>
      </div>
    </div>
  `).join('');
  
  modulesGrid.innerHTML = modulesHTML;
};

/* ============================================
   Динамическая загрузка списка результатов
   ============================================ */
const initOutcomes = () => {
  const outcomesList = document.getElementById('outcomes-list');
  if (!outcomesList) return;
  
  // Проверяем, что данные загружены
  if (typeof outcomes === 'undefined') {
    console.error('Outcomes data not loaded');
    return;
  }
  
  // Генерируем HTML для результатов
  const outcomesHTML = outcomes.map(outcome => `
    <div class="outcome-item">
      <div class="outcome-number">${outcome.number}</div>
      <div class="outcome-content">
        <h3 class="outcome-title">${outcome.title}</h3>
        <p class="outcome-description">${outcome.description}</p>
      </div>
    </div>
  `).join('');
  
  outcomesList.innerHTML = outcomesHTML;
};

/* ============================================
   Динамическая загрузка целевой аудитории
   ============================================ */
const initTargetAudience = () => {
  const targetGrid = document.getElementById('target-grid');
  if (!targetGrid) return;
  
  // Проверяем, что данные загружены
  if (typeof targetAudience === 'undefined') {
    console.error('Target audience data not loaded');
    return;
  }
  
  // Генерируем HTML для целевой аудитории
  const targetHTML = targetAudience.map(target => `
    <div class="target-card">
      <div class="target-icon">
        ${getIconSVG(target.icon)}
      </div>
      <h3 class="target-title">${target.title}</h3>
      <p class="target-description">${target.description}</p>
    </div>
  `).join('');
  
  targetGrid.innerHTML = targetHTML;
};

/* ============================================
   Показ/скрытие поля "Другое" в интересах
   ============================================ */
const initInterestsToggle = () => {
  const otherCheckbox = document.getElementById('interests-other-checkbox');
  const otherGroup = document.getElementById('interests-other-group');
  
  if (!otherCheckbox || !otherGroup) return;
  
  otherCheckbox.addEventListener('change', () => {
    if (otherCheckbox.checked) {
      otherGroup.style.display = 'block';
      document.getElementById('interests-other').focus();
    } else {
      otherGroup.style.display = 'none';
      document.getElementById('interests-other').value = '';
    }
  });
};

/* ============================================
   Утилиты: Получение SVG иконок
   ============================================ */
const getIconSVG = (iconName) => {
  const icons = {
    rocket: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L20 14L30 16L20 18L16 28L12 18L2 16L12 14L16 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    
    scale: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4V28M6 8L16 4L26 8M6 24L16 28L26 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8V12C6 14.2091 8.68629 16 12 16C15.3137 16 18 14.2091 18 12V8" stroke="currentColor" stroke-width="2"/><path d="M14 24V20C14 17.7909 16.6863 16 20 16C23.3137 16 26 17.7909 26 20V24" stroke="currentColor" stroke-width="2"/></svg>',
    
    megaphone: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10L24 4V28L8 22V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16H4V16C4 18.2091 5.79086 20 8 20V16Z" stroke="currentColor" stroke-width="2"/><path d="M12 22V26C12 27.1046 12.8954 28 14 28H14C15.1046 28 16 27.1046 16 26V22" stroke="currentColor" stroke-width="2"/></svg>',
    
    calculator: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" stroke-width="2"/><rect x="10" y="8" width="12" height="4" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="18" r="1.5" fill="currentColor"/><circle cx="16" cy="18" r="1.5" fill="currentColor"/><circle cx="20" cy="18" r="1.5" fill="currentColor"/><circle cx="12" cy="23" r="1.5" fill="currentColor"/><circle cx="16" cy="23" r="1.5" fill="currentColor"/><circle cx="20" cy="23" r="1.5" fill="currentColor"/></svg>',
    
    robot: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="16" height="14" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="18" r="1.5" fill="currentColor"/><circle cx="20" cy="18" r="1.5" fill="currentColor"/><path d="M12 24H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 6V12M16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4C18 5.10457 17.1046 6 16 6Z" stroke="currentColor" stroke-width="2"/><path d="M8 16H4M28 16H24M8 22H4M28 22H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    
    code: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L4 16L12 24M20 8L28 16L20 24M18 4L14 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    
    briefcase: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="24" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M4 16H28M12 10V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V10" stroke="currentColor" stroke-width="2"/></svg>',
    
    crown: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24H28L24 12L16 18L8 12L4 24Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="8" cy="12" r="2" fill="currentColor"/><circle cx="24" cy="12" r="2" fill="currentColor"/></svg>',
    
    lightbulb: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C11.5817 4 8 7.58172 8 12C8 14.5 9 16.5 10 18C11 19.5 12 20.5 12 23H20C20 20.5 21 19.5 22 18C23 16.5 24 14.5 24 12C24 7.58172 20.4183 4 16 4Z" stroke="currentColor" stroke-width="2"/><path d="M12 26H20M14 29H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    
    heart: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 28C16 28 4 20 4 11C4 7.68629 6.68629 5 10 5C12.4 5 14.5 6.3 16 8.2C17.5 6.3 19.6 5 22 5C25.3137 5 28 7.68629 28 11C28 20 16 28 16 28Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    
    users: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="10" r="4" stroke="currentColor" stroke-width="2"/><circle cx="22" cy="10" r="4" stroke="currentColor" stroke-width="2"/><path d="M6 28C6 23.5817 9.13401 20 13 20C16.866 20 20 23.5817 20 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M26 28C26 25.5 24.5 23.5 22.5 22.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    
    target: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="3" fill="currentColor"/><circle cx="16" cy="16" r="7" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/></svg>',
    
    star: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    
    settings: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="3" stroke="currentColor" stroke-width="2"/><path d="M16 4L18 8L22 8.5L18.5 12L19 16L16 14L13 16L13.5 12L10 8.5L14 8L16 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 28L14 24L10 23.5L13.5 20L13 16L16 18L19 16L18.5 20L22 23.5L18 24L16 28Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 16L8 14L8.5 10L12 13.5L16 13L14 16L16 19L12 18.5L8.5 22L8 18L4 16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M28 16L24 18L23.5 22L20 18.5L16 19L18 16L16 13L20 13.5L23.5 10L24 14L28 16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };
  
  return icons[iconName] || icons.star;
};

/* ============================================
   Analytics Events (Google Analytics)
   ============================================ */
const trackEvent = (eventName, eventParams = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
  console.log('Event tracked:', eventName, eventParams);
};

// Отслеживание кликов на CTA
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const location = e.target.closest('section')?.id || 'unknown';
    trackEvent('cta_click', { location });
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

