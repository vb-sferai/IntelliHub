/**
 * Password protection for mensclub-gifts page
 * Uses SHA-256 hashing for basic security
 *
 * NOTE: Uses pure JS SHA-256 implementation for HTTP compatibility
 * (crypto.subtle only works in secure contexts - HTTPS/localhost)
 */

// SHA-256 hash of the password
const PASSWORD_HASH = 'e6ed7ff01f05ddc6807fddf21938f3b3ce0bcb30ed1b1849db46414f67e5b20a';
const AUTH_KEY = 'mensclub_gifts_auth';

/**
 * Pure JavaScript SHA-256 implementation
 * Works in any browser without crypto.subtle (HTTP compatible)
 * Based on the FIPS 180-4 specification
 *
 * @param {string} message - The string to hash
 * @returns {string} - Hex string of the hash
 */
function sha256(message) {
  // Convert string to UTF-8 byte array
  function utf8Encode(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode < 0x80) {
        bytes.push(charCode);
      } else if (charCode < 0x800) {
        bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
      } else if (charCode < 0xd800 || charCode >= 0xe000) {
        bytes.push(
          0xe0 | (charCode >> 12),
          0x80 | ((charCode >> 6) & 0x3f),
          0x80 | (charCode & 0x3f)
        );
      } else {
        // Surrogate pair
        i++;
        charCode =
          0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
        bytes.push(
          0xf0 | (charCode >> 18),
          0x80 | ((charCode >> 12) & 0x3f),
          0x80 | ((charCode >> 6) & 0x3f),
          0x80 | (charCode & 0x3f)
        );
      }
    }
    return bytes;
  }

  // Right rotate
  function rotr(n, x) {
    return (x >>> n) | (x << (32 - n));
  }

  // SHA-256 functions
  function ch(x, y, z) {
    return (x & y) ^ (~x & z);
  }
  function maj(x, y, z) {
    return (x & y) ^ (x & z) ^ (y & z);
  }
  function sigma0(x) {
    return rotr(2, x) ^ rotr(13, x) ^ rotr(22, x);
  }
  function sigma1(x) {
    return rotr(6, x) ^ rotr(11, x) ^ rotr(25, x);
  }
  function gamma0(x) {
    return rotr(7, x) ^ rotr(18, x) ^ (x >>> 3);
  }
  function gamma1(x) {
    return rotr(17, x) ^ rotr(19, x) ^ (x >>> 10);
  }

  // SHA-256 constants (first 32 bits of fractional parts of cube roots of first 64 primes)
  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
    0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
    0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
    0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
    0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  // Initial hash values (first 32 bits of fractional parts of square roots of first 8 primes)
  let H = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
    0x1f83d9ab, 0x5be0cd19,
  ];

  // Pre-processing: convert message to bytes and add padding
  const msgBytes = utf8Encode(message);
  const msgLen = msgBytes.length;
  const bitLen = msgLen * 8;

  // Append bit '1' to message (0x80 = 10000000)
  msgBytes.push(0x80);

  // Append zeros until message length ≡ 448 (mod 512), i.e., 56 bytes (mod 64)
  while (msgBytes.length % 64 !== 56) {
    msgBytes.push(0x00);
  }

  // Append original length in bits as 64-bit big-endian integer
  // JavaScript numbers are 64-bit floats, so we handle high and low 32 bits
  const highBits = Math.floor(bitLen / 0x100000000);
  const lowBits = bitLen >>> 0;
  msgBytes.push(
    (highBits >>> 24) & 0xff,
    (highBits >>> 16) & 0xff,
    (highBits >>> 8) & 0xff,
    highBits & 0xff,
    (lowBits >>> 24) & 0xff,
    (lowBits >>> 16) & 0xff,
    (lowBits >>> 8) & 0xff,
    lowBits & 0xff
  );

  // Process message in 512-bit (64-byte) chunks
  for (let i = 0; i < msgBytes.length; i += 64) {
    // Create message schedule array W[0..63]
    const W = new Array(64);

    // Copy chunk into first 16 words W[0..15]
    for (let t = 0; t < 16; t++) {
      W[t] =
        (msgBytes[i + t * 4] << 24) |
        (msgBytes[i + t * 4 + 1] << 16) |
        (msgBytes[i + t * 4 + 2] << 8) |
        msgBytes[i + t * 4 + 3];
    }

    // Extend the first 16 words into remaining 48 words W[16..63]
    for (let t = 16; t < 64; t++) {
      W[t] =
        (gamma1(W[t - 2]) + W[t - 7] + gamma0(W[t - 15]) + W[t - 16]) >>> 0;
    }

    // Initialize working variables
    let a = H[0],
      b = H[1],
      c = H[2],
      d = H[3],
      e = H[4],
      f = H[5],
      g = H[6],
      h = H[7];

    // Main compression loop
    for (let t = 0; t < 64; t++) {
      const T1 = (h + sigma1(e) + ch(e, f, g) + K[t] + W[t]) >>> 0;
      const T2 = (sigma0(a) + maj(a, b, c)) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + T1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (T1 + T2) >>> 0;
    }

    // Add compressed chunk to current hash value
    H[0] = (H[0] + a) >>> 0;
    H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0;
    H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0;
    H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0;
    H[7] = (H[7] + h) >>> 0;
  }

  // Produce final hash value as hex string
  return H.map((n) => n.toString(16).padStart(8, '0')).join('');
}

/**
 * Check if the entered password is correct
 * @param {string} password - The password to check
 * @returns {boolean} - True if password is correct
 */
function checkPassword(password) {
  const hash = sha256(password);
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
function handleSubmit(event) {
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

  // Now synchronous - no await needed
  const isCorrect = checkPassword(password);

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
