import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

const galleryEl = document.querySelector('.gallery');
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.innerHTML = makeTransactionRole;

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li>
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src= ${preview} alt="${description}" />
    </a>
    </li>
    `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 250,
});
