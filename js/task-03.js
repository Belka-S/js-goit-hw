// Write a script to create a gallery of images from an array of data.
// There is a list, 'ul.gallery', in HTML.
// Use an array of objects 'images' to create <img> elements nested in <li>.
// Use template strings and the insertAdjacentHTML() method to create markup.
// All gallery items must be added to DOM in one insert operation.
// Add at least some gallery design with flexboxes or grids using CSS classes.

const images = [
 {
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

// -----------------------------------------------------------------------------

const ref = {
 galleryEl: document.querySelector('ul.gallery'),
 headEl: document.querySelector('head'),
};

const galleryMarkup = images
 .map(
  ({ url, alt }) =>
   ` <li class = "gallery__item"><img src="${url}" alt="${alt}"></li>`
 )
 .join('');

ref.galleryEl.insertAdjacentHTML(
 'afterbegin',
 galleryMarkup
);

const galleryStylesCss =
 '<style>img { display: block; width: 100%; height: auto; object-fit: cover;} .gallery { padding: 5px; display: flex; gap: 10px; outline: 1px tomato dashed;} .gallery__item { display: flex; flex-grow: 1; list-style: none;}</style>';
ref.headEl.insertAdjacentHTML(
 'beforeend',
 galleryStylesCss
);

// -----------------------------------------------------------------------------

// const head = document.querySelector('head');
// const galleryStylesCss =
//  '<link rel="stylesheet" href="css/task-03.css" />';
// head.insertAdjacentHTML(
//  'beforeend',
//  galleryStylesCss
// );

// -----------------------------------------------------------------------------

// const galleryStylesCss =
//  document.createElement('link');
// galleryStylesCss.rel = 'stylesheet';
// galleryStylesCss.href = '/css/task-03.css';

// document
//  .querySelector('head')
//  .append(galleryStylesCss);
