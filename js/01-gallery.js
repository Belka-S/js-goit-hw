import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(
 'div.gallery'
);

// Gallery
function createGalleryMarkup(source) {
 return source.reduce(
  (acc, { preview, original, description }) =>
   acc +
   `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ''
 );
}

function renderGalleryMarkup(source) {
 galleryEl.innerHTML =
  createGalleryMarkup(source);
}

renderGalleryMarkup(galleryItems);

// Modal
function createModalMarkup(source) {
 return basicLightbox.create(
  `<img src="${source}">`,
  { closable: true }
 );
}

galleryEl.addEventListener('click', onClick);

function onClick(e) {
 e.preventDefault();

 const { source } = e.target.dataset;
 if (!source) {
  return;
 }
 const modal = createModalMarkup(source);
 modal.show();
 closeOnEsc(modal);
}

function closeOnEsc(modal) {
 const onEsc = e => {
  if (e.code === 'Escape') {
   modal.close();
  }
 };
 addEventListener('keydown', onEsc);
}
