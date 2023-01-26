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
// -----------------------------------------------------------------------------

const ref = {
 inputEl: document.querySelector(
  '#controls input'
 ),
 createBtnEl: document.querySelector(
  '#controls button[data-create]'
 ),
 destroyBtnEl: document.querySelector(
  '#controls button[data-destroy]'
 ),
 divEl: document.querySelector('div#boxes'),
};

// Object.keys(ref).forEach(key => {
//  console.log(key);
//  console.log(ref[key]);
// });

ref.createBtnEl.addEventListener(
 'click',
 getAmount
);

function getAmount() {
 const amount = ref.inputEl.value;
 createBoxes(amount);

 function createBoxes(amount) {
  function getRandomHexColor() {
   return `#${Math.floor(
    Math.random() * 16777215
   ).toString(16)}`;
  }
  const element = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
   const color = getRandomHexColor();
   element[i] = document.createElement('div');
   element[i].style.backgroundColor = `${color}`;
   element[i].style.width = `${size}px`;
   element[i].style.height = `${size}px`;
   size += 10;
  }

  ref.divEl.append(...element);
 }
}

ref.destroyBtnEl.addEventListener(
 'click',
 destroyBoxes
);

function destroyBoxes() {
 ref.divEl.innerHTML = '';
}
