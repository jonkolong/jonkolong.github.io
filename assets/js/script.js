// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'light');
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Change icon to moon
  } else {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>'; // Change icon to sun
  }
});