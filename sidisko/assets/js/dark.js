function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeButton = document.querySelector('.dark-mode button');
    const themeIcon = themeButton.querySelector('i');

    // Menambahkan kelas transisi
    document.body.classList.add('transition');

    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
      setTimeout(() => {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeButton.classList.remove('bg-light');
        themeButton.classList.add('bg-warning');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
        setCookie('theme', 'light', 7);
      }, 300); // Tambahkan delay 300ms atau sesuai keinginan
    } else {
      setTimeout(() => {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeButton.classList.remove('bg-warning');
        themeButton.classList.add('bg-light');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
        setCookie('theme', 'dark', 7);
      }, 300); // Tambahkan delay 300ms atau sesuai keinginan
    }
  }

  function loadThemeFromCookie() {
    const savedTheme = getCookie('theme');
    const htmlElement = document.documentElement;
    const themeButton = document.querySelector('.dark-mode button');
    const themeIcon = themeButton.querySelector('i');

    if (savedTheme === 'light') {
      htmlElement.setAttribute('data-bs-theme', 'light');
      themeButton.classList.remove('bg-light');
      themeButton.classList.add('bg-warning');
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      themeButton.classList.remove('bg-warning');
      themeButton.classList.add('bg-light');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
    }
  }

  document.addEventListener('DOMContentLoaded', loadThemeFromCookie);