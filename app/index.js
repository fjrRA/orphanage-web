// Responsive Navbar
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('hidden');
});

// Fecth & Showing Program Pages
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

// Fecth & Showing Facility Pages
function fetchFacilityData() {
  fetch('../DATA/facility__pages.json')
    .then(response => response.json())
    .then(data => displayFacilityData(data.programRutinitas))
    .catch(error => console.error('Error fetching facility data:', error));
}

function displayFacilityData(facilities) {
  const facilityContainer = document.querySelector('section.facility');

  facilityContainer.innerHTML = '';

  facilities.forEach(facility => {
    const facilityCard = document.createElement('div');
    facilityCard.classList.add('facility__container');

    facilityCard.innerHTML = `
      <img src="${facility.gambarFasilitas}" alt="${facility.judulFasilitas}">
      <h3>${facility.judulFasilitas}</h3>
      <p>${facility.deskripsiFasilitas}</p>
    `;

    facilityContainer.appendChild(facilityCard);
  });
}

document.addEventListener('DOMContentLoaded', fetchProgramData);
document.addEventListener('DOMContentLoaded', fetchFacilityData);