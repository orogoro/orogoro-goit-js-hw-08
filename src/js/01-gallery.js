import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.innerHTML = makeTransactionRole;

galleryEl.addEventListener('click', onGallaryConteinerClick);

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href= ${original}>
        <img
        class="gallery__image"
        src= ${preview}
        data-source= ${original}
        alt="${description}"
        />
    </a>
    </div>
    `;
    })
    .join('');
}

function onGallaryConteinerClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const nextActivPicture = e.target.dataset.source;
  onOpenModal(nextActivPicture);
}

function onOpenModal(nextActivPicture) {
  // window.addEventListener("keydown", onEscKeyPress);

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src=${nextActivPicture} width="1120" height="100%">
    </div>
`,
  );
  instance.show();

  //   document.addEventListener('keydown', function (e) {
  //     // console.log(e.code);
  //     if (e.code === 'Enter') {
  //       document.removeEventListener('keydown', this);
  //       instance.close();
  //     }
  //   });

  // instance.show();
}

// function onEscKeyPress(e) {
//   console.log(e.code);
//   // if (e.code === "Escape") {
//   //   onCloseModal();
//   // }
// }

// function onCloseModal() {
//   // window.removeEventListener("keydown", onEscKeyPress);
//   instance.close(() => window.removeEventListener("keydown", onEscKeyPress));
// }
