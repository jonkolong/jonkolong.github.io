/**
 * Sets a cookie with a specified name, value, and expiration in days.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 */
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

/**
 * Retrieves the value of a cookie by its name.
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string|null} The cookie value or null if not found.
 */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

/**
 * Toggles the color theme of the website between light and dark mode.
 * It also updates the background classes for the topbar and body.
 */
function toggleTheme() {
  const htmlElement = document.documentElement;
  const themeButton = document.querySelector('.dark-mode button');
  const themeIcon = themeButton.querySelector('i');
  // Get the topbar and body elements
  const topbar = document.getElementById('topbar');
  const body = document.body;

  // Add a class to enable transitions
  document.body.classList.add('transition');

  // Check the current theme and switch to the opposite
  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    // Switch to Light Mode
    setTimeout(() => {
      htmlElement.setAttribute('data-bs-theme', 'light');
      themeButton.classList.remove('bg-light');
      themeButton.classList.add('bg-warning');
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
      setCookie('theme', 'light', 7);

      // Change topbar and body classes for light mode
      topbar.classList.remove('bg-dark-subtle');
      topbar.classList.add('bg-kominfo');
      body.classList.remove('bg-body-secondary');
      body.classList.add('bg-body-all');
    }, 300);
  } else {
    // Switch to Dark Mode
    setTimeout(() => {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      themeButton.classList.remove('bg-warning');
      themeButton.classList.add('bg-light');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
      setCookie('theme', 'dark', 7);
      
      // Revert topbar and body classes for dark mode
      topbar.classList.remove('bg-kominfo');
      topbar.classList.add('bg-dark-subtle');
      body.classList.remove('bg-body-all');
      body.classList.add('bg-body-secondary');
    }, 300);
  }
}

/**
 * Loads the saved theme from the cookie when the page loads.
 * This ensures the correct theme and element classes are applied on startup.
 */
function loadThemeFromCookie() {
  const savedTheme = getCookie('theme');
  const htmlElement = document.documentElement;
  const themeButton = document.querySelector('.dark-mode button');
  const themeIcon = themeButton.querySelector('i');
  // Get the topbar and body elements
  const topbar = document.getElementById('topbar');
  const body = document.body;

  if (savedTheme === 'light') {
    // Apply Light Mode from cookie
    htmlElement.setAttribute('data-bs-theme', 'light');
    themeButton.classList.remove('bg-light');
    themeButton.classList.add('bg-warning');
    themeIcon.classList.remove('bi-moon-fill');
    themeIcon.classList.add('bi-sun-fill');

    // Set topbar and body classes for light mode
    topbar.classList.remove('bg-dark-subtle');
    topbar.classList.add('bg-kominfo');
    body.classList.remove('bg-body-secondary');
    body.classList.add('bg-body-all');
  } else {
    // Apply Dark Mode (default or from cookie)
    htmlElement.setAttribute('data-bs-theme', 'dark');
    themeButton.classList.remove('bg-warning');
    themeButton.classList.add('bg-light');
    themeIcon.classList.remove('bi-sun-fill');
    themeIcon.classList.add('bi-moon-fill');

    // Set topbar and body classes for dark mode
    topbar.classList.remove('bg-kominfo');
    topbar.classList.add('bg-dark-subtle');
    body.classList.remove('bg-body-all');
    body.classList.add('bg-body-secondary');
  }
}

// Event listener to load the theme when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', loadThemeFromCookie);