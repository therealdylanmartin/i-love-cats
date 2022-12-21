// FUNCTIONS //

// Build cat grid in index.html
const appendToGrid = function () {
  const gridElement = document.getElementById('cat-grid');

  // for...of loop works similarly to standard for loop but without the index
  for (let cat of availableCats) {
    // Create elements to set attributes on and append to document
    const catContainer = document.createElement('a');
    const catImage = document.createElement('img');
    const catInnerDiv = document.createElement('div');
    const catHeading = document.createElement('h3');

    // Turn cat.name into a slug for use in url
    const nameSlugified = cat.name.toLowerCase().replaceAll(' ', '-');

    // Create and attach grid tile link to gridElement
    catContainer.setAttribute('class', 'cat-tile');
    catContainer.setAttribute('href', `/i-love-cats/pages/cats/${nameSlugified}.html`);
    gridElement.appendChild(catContainer);
    // Create and attach image to catContainer
    catImage.setAttribute('alt', cat.imageAltText);
    catImage.setAttribute('src', `./assets/images/${cat.image}`);
    catContainer.appendChild(catImage);
    // Create and attach overlay div to catContainer
    catInnerDiv.setAttribute('class', 'overlay flex-container justify-center align-items-center');
    catContainer.appendChild(catInnerDiv);
    // Create and attach h3 heading to catInnerDiv
    catHeading.textContent = cat.name;
    catInnerDiv.appendChild(catHeading);
  }
}

// CALL FUNCTIONS //

appendToGrid();