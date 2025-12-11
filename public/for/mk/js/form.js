// Form JavaScript - Валидация и отправка формы регистрации

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  if (!form) return;
  
  initFormValidation(form);
  initFormSubmit(form);
});

/* ============================================
   Валидация формы
   ============================================ */
const initFormValidation = (form) => {
  // Получаем все поля формы
  const fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    telegram: form.querySelector('#telegram'),
    company: form.querySelector('#company'),
    phone: form.querySelector('#phone'),
    aiLevel: form.querySelectorAll('input[name="ai-level"]'),
    interests: form.querySelectorAll('input[name="interests"]'),
    businessTask: form.querySelector('#business-task')
  };
  
  // Валидация в реальном времени
  if (fields.name) {
    fields.name.addEventListener('blur', () => validateName(fields.name));
    fields.name.addEventListener('input', () => clearError(fields.name));
  }
  
  if (fields.email) {
    fields.email.addEventListener('blur', () => validateEmail(fields.email));
    fields.email.addEventListener('input', () => clearError(fields.email));
  }
  
  if (fields.telegram) {
    fields.telegram.addEventListener('blur', () => validateTelegram(fields.telegram));
    fields.telegram.addEventListener('input', () => clearError(fields.telegram));
  }
  
  if (fields.company) {
    fields.company.addEventListener('blur', () => validateCompany(fields.company));
    fields.company.addEventListener('input', () => clearError(fields.company));
  }
  
  // Валидация телефона (опциональное поле)
  if (fields.phone) {
    fields.phone.addEventListener('blur', () => {
      const value = fields.phone.value.trim();
      if (value) {
        validatePhone(fields.phone);
      }
    });
    fields.phone.addEventListener('input', () => clearError(fields.phone));
  }
};

/* ============================================
   Функции валидации
   ============================================ */
const validateName = (field) => {
  const value = field.value.trim();

  if (!value || value.length < 3) {
    showError(field, 'Введите имя и фамилию');
    return false;
  }

  clearError(field);
  return true;
};

const validateEmail = (field) => {
  const value = field.value.trim();

  if (!value) return true; // Опциональное поле

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError(field, 'Укажите корректный email');
    return false;
  }

  clearError(field);
  return true;
};

const validateTelegram = (field) => {
  const value = field.value.trim();

  if (!value) {
    showError(field, 'Укажите Telegram');
    return false;
  }

  // Проверка: должен начинаться с @ и иметь минимум 2 символа после
  if (!value.startsWith('@') || value.length < 3) {
    showError(field, 'Укажите Telegram');
    return false;
  }

  clearError(field);
  return true;
};

const validateCompany = (field) => {
  const value = field.value.trim();
  
  if (!value) {
    showError(field, 'Пожалуйста, укажите компанию и должность');
    return false;
  }
  
  if (value.length < 3) {
    showError(field, 'Слишком короткое название');
    return false;
  }
  
  clearError(field);
  return true;
};

const validatePhone = (field) => {
  const value = field.value.trim();
  
  if (!value) return true; // Опциональное поле
  
  // Удаляем все нечисловые символы кроме +
  const digitsOnly = value.replace(/[^\d+]/g, '');
  
  if (digitsOnly.length < 10) {
    showError(field, 'Укажите корректный номер телефона');
    return false;
  }
  
  clearError(field);
  return true;
};

/* ============================================
   Утилиты для ошибок
   ============================================ */
const showError = (field, message) => {
  field.setAttribute('aria-invalid', 'true');

  const errorId = field.id + '-error';
  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = message;
  }
};

const clearError = (field) => {
  field.classList.remove('error');
  field.setAttribute('aria-invalid', 'false');
  
  const errorId = field.id + '-error';
  const errorElement = document.getElementById(errorId);
  
  if (errorElement) {
    errorElement.textContent = '';
  }
};

/* ============================================
   Отправка формы
   ============================================ */
const initFormSubmit = (form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Валидация всех полей
    const isValid = validateForm(form);
    if (!isValid) {
      // Скроллим к первой ошибке
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }
    
    // Собираем данные формы
    const formData = collectFormData(form);
    
    // Отправляем форму
    await submitForm(form, formData);
  });
};

const validateForm = (form) => {
  const nameField = form.querySelector('#name');
  const emailField = form.querySelector('#email');
  const telegramField = form.querySelector('#telegram');
  const companyField = form.querySelector('#company');
  const phoneField = form.querySelector('#phone');
  
  let isValid = true;

  if (!validateName(nameField)) isValid = false;
  if (!validateTelegram(telegramField)) isValid = false;
  if (!validateCompany(companyField)) isValid = false;

  // Валидация email только если заполнен
  if (emailField && emailField.value.trim()) {
    if (!validateEmail(emailField)) isValid = false;
  }

  // Валидация телефона только если заполнен
  if (phoneField && phoneField.value.trim()) {
    if (!validatePhone(phoneField)) isValid = false;
  }
  
  // Проверка radio кнопок AI level (без alert)
  const aiLevelChecked = form.querySelector('input[name="ai-level"]:checked');
  if (!aiLevelChecked) {
    isValid = false;
  }

  // Проверка интересов (без alert)
  const interestsChecked = form.querySelectorAll('input[name="interests"]:checked');
  if (interestsChecked.length === 0) {
    isValid = false;
  }

  // Проверка бизнес-задачи
  const businessTaskField = form.querySelector('#business-task');
  if (businessTaskField) {
    const businessTaskValue = businessTaskField.value.trim();
    if (!businessTaskValue) {
      showError(businessTaskField, 'Пожалуйста, опишите бизнес-задачу');
      isValid = false;
    } else if (businessTaskValue.length < 10) {
      showError(businessTaskField, 'Опишите задачу подробнее (минимум 10 символов)');
      isValid = false;
    } else {
      clearError(businessTaskField);
    }
  }

  return isValid;
};

const collectFormData = (form) => {
  // Базовая информация
  const data = {
    name: form.querySelector('#name').value.trim(),
    email: form.querySelector('#email').value.trim(),
    telegram: form.querySelector('#telegram').value.trim(),
    company: form.querySelector('#company').value.trim(),
    phone: form.querySelector('#phone').value.trim() || null,
    
    // AI Level
    aiLevel: form.querySelector('input[name="ai-level"]:checked')?.value || null,
    
    // Interests
    interests: [],
    interestsOther: form.querySelector('#interests-other')?.value.trim() || null,
    
    // Business Task
    businessTask: form.querySelector('#business-task').value.trim() || null,
    
    // Metadata
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer
  };
  
  // Собираем выбранные интересы
  const interestCheckboxes = form.querySelectorAll('input[name="interests"]:checked');
  interestCheckboxes.forEach(checkbox => {
    data.interests.push(checkbox.value);
  });
  
  return data;
};

const submitForm = async (form, formData) => {
  const submitButton = form.querySelector('.btn-submit');
  const buttonText = submitButton.querySelector('.btn-text');
  
  // Показываем состояние загрузки
  submitButton.classList.add('loading');
  submitButton.disabled = true;
  
  try {
    // Отслеживаем начало заполнения формы
    if (typeof trackEvent !== 'undefined') {
      trackEvent('form_submit_attempt', {
        interests_count: formData.interests.length,
        ai_level: formData.aiLevel
      });
    }
    
    // Отправка в Google Sheets
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxIfTZ9Cv6hRsrLD5EYnMaNt0i0PGAMPmU3wwVl8OkhSOtlrNRcTpWUhqL5lgbm7X_e/exec';

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    console.log('Form data sent to Google Sheets:', formData);
    
    // Показываем success сообщение
    showSuccessMessage(form);
    
    // Отслеживаем успешную отправку
    if (typeof trackEvent !== 'undefined') {
      trackEvent('form_submit_success', {
        interests_count: formData.interests.length,
        ai_level: formData.aiLevel
      });
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Показываем ошибку
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или напишите напрямую на as@sfer.ai');
    
    // Убираем loading состояние
    submitButton.classList.remove('loading');
    submitButton.disabled = false;
    
    // Отслеживаем ошибку
    if (typeof trackEvent !== 'undefined') {
      trackEvent('form_submit_error', {
        error: error.message
      });
    }
  }
};

const sendEmail = async (formData) => {
  // В реальности здесь должен быть backend endpoint
  // Который отправит email на as@sfer.ai с данными формы
  
  // Формируем текст письма
  const emailBody = `
Новая регистрация на AI-программу для Мужского клуба

=== КОНТАКТНАЯ ИНФОРМАЦИЯ ===
Имя: ${formData.name}
Email: ${formData.email}
Telegram: ${formData.telegram}
Компания: ${formData.company}
Телефон: ${formData.phone || 'Не указан'}

=== ИНТЕРЕСЫ ===
${formData.interests.length > 0 ? formData.interests.join(', ') : 'Не выбраны'}
${formData.interestsOther ? `Другое: ${formData.interestsOther}` : ''}

=== УРОВЕНЬ AI ===
${formData.aiLevel || 'Не указан'}

=== БИЗНЕС-ЗАДАЧА ===
${formData.businessTask || 'Не указана'}

=== МЕТАДАННЫЕ ===
Дата регистрации: ${new Date(formData.timestamp).toLocaleString('ru-RU')}
Источник: ${formData.referrer || 'Прямой заход'}
  `;
  
  console.log('Email to send:', emailBody);
  
  // TODO: Интегрировать с реальным сервисом отправки email
  // Варианты:
  // 1. Собственный backend (Node.js + Nodemailer)
  // 2. Сервис типа SendGrid, Mailgun, Resend
  // 3. Serverless функция (Vercel Functions, Netlify Functions)
  
  return Promise.resolve();
};

const showSuccessMessage = (form) => {
  // Скрываем форму
  form.style.display = 'none';
  
  // Показываем success сообщение
  const successMessage = document.getElementById('form-success');
  if (successMessage) {
    successMessage.style.display = 'block';
    
    // Скроллим к success сообщению
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

/* ============================================
   Автосохранение данных формы (опционально)
   ============================================ */
const initFormAutosave = (form) => {
  const STORAGE_KEY = 'mens-club-form-draft';
  
  // Загружаем сохраненные данные
  const loadDraft = () => {
    try {
      const draft = localStorage.getItem(STORAGE_KEY);
      if (!draft) return;
      
      const data = JSON.parse(draft);
      
      // Заполняем поля
      if (data.name) form.querySelector('#name').value = data.name;
      if (data.email) form.querySelector('#email').value = data.email;
      if (data.telegram) form.querySelector('#telegram').value = data.telegram;
      if (data.company) form.querySelector('#company').value = data.company;
      if (data.phone) form.querySelector('#phone').value = data.phone;
      if (data.businessTask) form.querySelector('#business-task').value = data.businessTask;
      
      console.log('Form draft loaded');
    } catch (error) {
      console.error('Error loading form draft:', error);
    }
  };
  
  // Сохраняем данные
  const saveDraft = () => {
    try {
      const data = {
        name: form.querySelector('#name').value.trim(),
        email: form.querySelector('#email').value.trim(),
        telegram: form.querySelector('#telegram').value.trim(),
        company: form.querySelector('#company').value.trim(),
        phone: form.querySelector('#phone').value.trim(),
        businessTask: form.querySelector('#business-task').value.trim()
      };
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving form draft:', error);
    }
  };
  
  // Загружаем при инициализации
  loadDraft();
  
  // Сохраняем при изменении полей
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      // Debounce: сохраняем через 1 секунду после последнего ввода
      clearTimeout(input.saveTimeout);
      input.saveTimeout = setTimeout(saveDraft, 1000);
    });
  });
  
  // Удаляем draft после успешной отправки
  form.addEventListener('submit', () => {
    localStorage.removeItem(STORAGE_KEY);
  });
};

// Раскомментируйте, если нужно автосохранение
// initFormAutosave(document.getElementById('register-form'));

