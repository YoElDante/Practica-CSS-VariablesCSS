// script.js

const themeToggleButton = document.getElementById('theme-toggle');

// Función para cambiar el tema
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  // Alterna entre los temas
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});