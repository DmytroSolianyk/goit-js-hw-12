export function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        tags,
        largeImageURL,
        views,
        downloads,
        likes,
        comments,
      }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${likes}</span>
            </label>
    
            <label>
              Views
              <span>${views}</span>
            </label>
    
            <label>
              Comments
              <span>${comments}</span>
            </label>
    
            <label>
              Downloads
              <span>${downloads}</span>
            </label>
          </div>
        </li>
      `;
      }
    )
    .join('');
}
