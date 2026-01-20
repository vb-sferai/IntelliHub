/**
 * Password protection for mensclub-gifts page
 * Uses SHA-256 hashing for basic security
 */

// SHA-256 hash of the password
const PASSWORD_HASH = 'e6ed7ff01f05ddc6807fddf21938f3b3ce0bcb30ed1b1849db46414f67e5b20a';
const AUTH_KEY = 'mensclub_gifts_auth';

/**
 * Compute SHA-256 hash of a string using Web Crypto API
 * @param {string} message - The string to hash
 * @returns {Promise<string>} - Hex string of the hash
 */
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Check if the entered password is correct
 * @param {string} password - The password to check
 * @returns {Promise<boolean>} - True if password is correct
 */
async function checkPassword(password) {
  const hash = await sha256(password);
  return hash === PASSWORD_HASH;
}

/**
 * Check if user is already authenticated via localStorage
 * @returns {boolean} - True if authenticated
 */
function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

/**
 * Save authentication state to localStorage
 */
function setAuthenticated() {
  localStorage.setItem(AUTH_KEY, 'true');
}

/**
 * Show the main page content and hide the auth overlay
 */
function showContent() {
  const overlay = document.getElementById('authOverlay');
  const mainContent = document.getElementById('mainContent');

  if (overlay) {
    overlay.classList.add('auth-hidden');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }

  if (mainContent) {
    mainContent.style.display = 'block';
    mainContent.classList.add('content-visible');
  }
}

/**
 * Show error message in the auth form
 * @param {string} message - Error message to display
 */
function showError(message) {
  const errorEl = document.getElementById('authError');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

/**
 * Clear error message
 */
function clearError() {
  const errorEl = document.getElementById('authError');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
}

/**
 * Handle form submission
 * @param {Event} event - Form submit event
 */
async function handleSubmit(event) {
  event.preventDefault();

  const passwordInput = document.getElementById('passwordInput');
  const submitBtn = document.getElementById('authSubmitBtn');
  const password = passwordInput.value.trim();

  if (!password) {
    showError('Введите пароль');
    return;
  }

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Проверка...';
  clearError();

  const isCorrect = await checkPassword(password);

  if (isCorrect) {
    setAuthenticated();
    showContent();
  } else {
    showError('Неверный пароль');
    passwordInput.value = '';
    passwordInput.focus();
  }

  // Re-enable button
  submitBtn.disabled = false;
  submitBtn.textContent = 'Войти';
}

/**
 * Initialize the auth system
 */
function initAuth() {
  // Check if already authenticated
  if (isAuthenticated()) {
    showContent();
    return;
  }

  // Show auth overlay
  const overlay = document.getElementById('authOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
  }

  // Setup form handler
  const form = document.getElementById('authForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }

  // Focus password input
  const passwordInput = document.getElementById('passwordInput');
  if (passwordInput) {
    passwordInput.focus();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAuth);
