// FUNCTIONS //

const appendCatBio = function () {
  // for...of loop works similarly to standard for loop but without the index
  for (let cat of availableCats) {
    // Turn cat.name into a slug to check URL and for use in id
    const nameSlugified = cat.name.toLowerCase().replaceAll(' ', '-');

    // If block to match cat object to page URL
    if (window.location.href.includes(nameSlugified)) {
      // Create elements to set attributes on and append to document
      const title = document.createElement('h1');
      const tagline = document.createElement('h2');
      const imageDiv = document.createElement('div');
      const image = document.createElement('img');
      const infoDiv = document.createElement('div');
      const nameHeading = document.createElement('h2');
      const likesHeading = document.createElement('h3');
      const likesList = document.createElement('ul');
      const dislikesHeading = document.createElement('h3');
      const dislikesList = document.createElement('ul');

      // Select elements for altering and appending
      const headTitle = document.querySelector('title');
      const metaDescription = document.querySelector('meta[name="description"]');
      const titleContainer = document.querySelector('#page-title');
      const pageCrumb = document.querySelector('.current-crumb');
      const bioContainer = document.querySelector(`#cat-bio-${nameSlugified}`);

      // Set webpage <title> element in <head> section
      headTitle.textContent = `About ${cat.name} | I Love Cats!`;
      // Set meta description element content
      metaDescription.setAttribute('content', `Learn more about ${cat.name}, the adorable adoptable cat.`);

      // Add text and attach page title and tagline to titleContainer
      title.textContent = `About ${cat.name}!`;
      tagline.textContent = `~ ${cat.tagline} ~`;
      titleContainer.appendChild(title);
      titleContainer.appendChild(tagline);

      // Add cat name to breadcrumb navigation
      pageCrumb.textContent = `About ${cat.name}`;

      // Create and append imageDiv to bioContainer
      imageDiv.setAttribute('class', 'cat-bio__img');
      bioContainer.appendChild(imageDiv);
      // Create and append image to imageDiv
      image.setAttribute('src', `../../assets/images/${cat.image}`);
      image.setAttribute('alt', cat.imageAltText);
      imageDiv.appendChild(image);

      // Create and append infoDiv to bioContainer
      infoDiv.setAttribute('class', 'cat-bio__profile');
      bioContainer.appendChild(infoDiv);
      // Create and append name heading to infoDiv
      nameHeading.textContent = `Name: ${cat.name}`;
      infoDiv.appendChild(nameHeading);

      // Create and append likes heading to infoDiv
      likesHeading.textContent = "Likes:";
      infoDiv.appendChild(likesHeading);
      // Create like list/list items and append to infoDiv
      infoDiv.appendChild(likesList);
      // run thru for...of loop to get likes
      for (let like of cat.likes) {
        const likesListItems = document.createElement('li');
        likesListItems.textContent = like;
        likesList.appendChild(likesListItems);
      }

      // Create and append dislikes heading to infoDiv
      dislikesHeading.textContent = "Dislikes:";
      infoDiv.appendChild(dislikesHeading);
      // Create list/list items and append to infoDiv
      infoDiv.appendChild(dislikesList);
      // run thru for...of loop to get dislikes
      for (let dislike of cat.dislikes) {
        const dislikesListItems = document.createElement('li');
        dislikesListItems.textContent = dislike;
        dislikesList.appendChild(dislikesListItems);
      }
    }
  }
}

// CALL FUNCTIONS //

appendCatBio();