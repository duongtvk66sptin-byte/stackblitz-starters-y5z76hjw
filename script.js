document.addEventListener('DOMContentLoaded', function () {
    
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  themeToggleBtn.addEventListener('click', function () {
      const currentTheme = htmlElement.getAttribute('data-theme');

      if (currentTheme === 'dark') {
          htmlElement.setAttribute('data-theme', 'light');
          htmlElement.classList.remove('dark');
          themeIcon.className = 'fa-solid fa-moon text-blue-600';
      } else {
          htmlElement.setAttribute('data-theme', 'dark');
          htmlElement.classList.add('dark');
          themeIcon.className = 'fa-solid fa-sun text-amber-400';
      }
  });
  
  const toggleDreamsBtn = document.getElementById('toggleDreamsBtn');
  const dreamsContent = document.getElementById('dreamsContent');
  const chevronIcon = document.getElementById('chevronIcon');

  toggleDreamsBtn.addEventListener('click', function () {
      const isHidden = dreamsContent.classList.contains('hidden');

      if (isHidden) {
          dreamsContent.classList.remove('hidden');
          chevronIcon.classList.add('rotate-180');
      } else {
          dreamsContent.classList.add('hidden');
          chevronIcon.classList.remove('rotate-180');
      }
  });
});
