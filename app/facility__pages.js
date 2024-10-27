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

document.addEventListener('DOMContentLoaded', fetchFacilityData);