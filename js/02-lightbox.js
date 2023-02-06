import { galleryItems } from './gallery-items.js';
// Change code below this line

// Gallery
const ulGalleryEl =
 document.querySelector('ul.gallery');

const galleryMarkup = galleryItems.reduce(
 (acc, { preview, original, description }) =>
  acc +
  `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`,
 ''
);

ulGalleryEl.innerHTML = galleryMarkup;
console.log(ulGalleryEl);

// Modal
let gallery = new SimpleLightbox('.gallery a', {
 navText: ['←', '→'],
 captionsData: 'alt',
 captionDelay: 250,
 close: false,
 scrollZoom: false,
});

addEventListener('wheel', onScroll);

function onScroll(e) {
 if (e.deltaY > 0) {
  gallery.next();
 } else {
  gallery.prev();
 }
}
