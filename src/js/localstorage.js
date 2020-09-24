const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('.js-switch-input');

defaultTheme();

switchRef.addEventListener('change', handleSwitchTheme);

function handleSwitchTheme(event) {
  if (event.target.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

function defaultTheme() {
  const currentLocalStorage = localStorage.getItem('Theme');

  if (!currentLocalStorage) {
    document.body.classList.add('light-theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
  if (currentLocalStorage === Theme.DARK) {
    document.body.classList.add('dark-theme');
    switchRef.checked = true;
  } else {
    document.body.classList.add('light-theme');
    switchRef.checked = false;
  }
}
