import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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


// const linkTargetBlank = document.querySelectorAll('.gallery__link');
// console.log(linkTargetBlank)

// function noTargetBlank(e) {
//     e.preventDefault();
// }
// linkTargetBlank.addEventListener('click', noTargetBlank, false);