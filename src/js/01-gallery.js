import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.innerHTML = makeTransactionRole;

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src= ${preview} alt="${description}" />
    </a>
    `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 250,
});
