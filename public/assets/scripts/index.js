// VARIABLES //
const adoptButton = document.querySelector('#adopt-button');

// FUNCTIONS //

// Adopt button alert
const adoptAlert = (event) => {
  alert('Get started with adoption!');
}

// GET cat data
const getCatData = async () => {
  const result = await fetch('/api/cats');
  const availableCats = await result.json();
  return availableCats;
}

// EVENT LISTENERS //
adoptButton.addEventListener('click', adoptAlert);