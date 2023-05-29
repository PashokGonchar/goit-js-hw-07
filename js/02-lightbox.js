import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description } = {}) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const linkTargetBlank = document.querySelectorAll('.gallery__link');
const linkTargetBlankArray = Array.prototype.slice.call(linkTargetBlank);

linkTargetBlankArray.forEach((e) => {
  e.addEventListener('click', noTargetBlank, false);
});

function noTargetBlank(e) {
  e.preventDefault();

  const instance = lightbox.create(`
  <div class="gallery">
    <a href="${preview}"><img src="${original}" alt="${description}"/></a>
  </div>
`);
  instance.show();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
