// Responsive Navbar
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('hidden');
});