const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.dropdown-menu.active').forEach(activeMenu => {
      if (activeMenu !== dropdownMenu) {
        activeMenu.classList.remove('active');
      }
    });

    dropdownMenu.classList.toggle('active');
  });
});

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('hidden');
});
