// VARIABLES //
const adoptButton = document.querySelector('#adopt-button');

// FUNCTIONS //

// Adopt button alert
const adoptAlert = function (event) {
  alert('Get started with adoption!');
}

// EVENT LISTENERS //
adoptButton.addEventListener('click', adoptAlert);