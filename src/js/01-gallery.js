import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
import markupFn from './gallery.hbs';

// Gallery
const galleryEl = document.querySelector('div.gallery');

galleryEl.innerHTML = galleryItems.reduce(
  (acc, item) => acc + markupFn(item),
  ''
);

// Modal SimpleLightbox
let modal = new SimpleLightbox(
  '.gallery a',
  {
    captionsData: 'alt',
    captionDelay: 250,
    close: false,
    scrollZoom: false,
  },
  addEventListener('wheel', onWheel)
);

function onWheel(e) {
  if (e.deltaY > 0) {
    modal.next();
  } else {
    modal.prev();
  }
}
