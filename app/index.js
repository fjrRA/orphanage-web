// Select hamburger button and main navigation
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

// Toggle menu visibility when the hamburger button is clicked
hamburgerButton.addEventListener('click', () => {
  // Toggle aria-expanded attribute
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  // Toggle visibility of the main navigation
  if (mainNav.classList.contains('hidden')) {
    mainNav.classList.remove('hidden');
  } else {
    mainNav.classList.add('hidden');
  }
});
