const adoptButton = document.querySelector('#adopt-button');

const adoptAlert = function (e) {
  alert('Get started with adoption!');
}

adoptButton.addEventListener('click', adoptAlert);