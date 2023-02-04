// const ref = {
//  inputEl: document.querySelector(
//   '#controls input'
//  ),
//  createBtnEl: document.querySelector(
//   '#controls button[data-create]'
//  ),
//  destroyBtnEl: document.querySelector(
//   '#controls button[data-destroy]'
//  ),
//  divEl: document.querySelector('div#boxes'),
// };

// ref.createBtnEl.addEventListener(
//  'click',
//  createBoxes
// );

// function createBoxes() {
//  console.log(event);
//  const amount = ref.inputEl.value;
//  const element = [];
//  let size = 30;

//  for (let i = 0; i < amount; i += 1) {
//   const color = getRandomHexColor();
//   element[i] = document.createElement('div');
//   element[i].style.backgroundColor = `${color}`;
//   element[i].style.width = `${size}px`;
//   element[i].style.height = `${size}px`;
//   size += 10;
//  }

//  ref.divEl.append(...element);
// }

// ref.destroyBtnEl.addEventListener(
//  'click',
//  destroyBoxes
// );

// function destroyBoxes() {
//  ref.divEl.innerHTML = '';
// }

// -------------------------------------------------------------------------------------------- //

// Write a script to create and clear a collection of elements. The user enters the number
// of elements into input and clicks the New button, after which a collection is rendered.
// When you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one parameter, a number. The function
// creates as many<div> as specified in amount and adds them to div#boxes.
// 1. The dimensions of the very first <div> are 30px by 30px.
// 2. Each element after the first one should be 10px wider and higher than the previous one.
// 3. All elements must have a random HEX background color.
//    Use the ready - made getRandomHexColor function to get a color.

function getRandomHexColor() {
 return `#${Math.floor(
  Math.random() * 16777215
 ).toString(16)}`;
}

// -------------------------------------------------------------------------------------------- //

const ref = {
 divControlsEl: document.querySelector(
  'div#controls'
 ),
 inputEl: document.querySelector(
  'input[type="number"]'
 ),
 divBoxesEl: document.querySelector('div#boxes'),
};
// Object.values(ref).forEach(el => console.log(el));
ref.divControlsEl.addEventListener(
 'click',
 onBtnClick
);

function onBtnClick(event) {
 if (event.target.nodeName !== 'BUTTON') {
  return;
 }
 let markup = '';
 for (let i = 0; i < ref.inputEl.value; i += 1) {
  const color = getRandomHexColor();
  const size = 30 + i * 10;
  markup += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
 }
 const { create, destroy } = event.target.dataset;
 create ?? (ref.divBoxesEl.innerHTML = '');
 destroy ??
  ref.divBoxesEl.insertAdjacentHTML(
   'afterbegin',
   markup
  );
}
