const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('hidden');
});

function fetchProgramData() {
  fetch('../DATA/program__pages.json')
    .then(response => response.json())
    .then(data => displayProgramData(data.programRutinitas))
    .catch(error => console.error('Error fetching program data:', error));
}

function displayProgramData(programRutinitas) {
  const routineList = document.querySelector('.program__routine-list');
  routineList.innerHTML = '';

  programRutinitas.forEach((program) => {
    const routineCard = document.createElement('div');
    routineCard.classList.add('program__routine-card');

    routineCard.innerHTML = `
      <span>${program.waktu}</span>
      <h3>${program.judulAktivitas}</h3>
      <p>${program.deskripsiAktivitas}</p>
    `;

    routineList.appendChild(routineCard);
  });
}

document.addEventListener('DOMContentLoaded', fetchProgramData);