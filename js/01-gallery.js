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
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </li>
      `;
    })
    .join('');
}

const linkTargetBlank = document.querySelectorAll('.gallery__link');
const linkTargetBlankArray = Array.prototype.slice.call(linkTargetBlank);

linkTargetBlankArray.forEach((e) => {
  e.addEventListener('click', noTargetBlank, false);
});

function noTargetBlank(e) {
  e.preventDefault();

  const instance = basicLightbox.create(`
    <div class="modal">
          <img src = "${e.target.dataset.source}" width="800" height="600"/>
    </div>
`);
  instance.show();



  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
