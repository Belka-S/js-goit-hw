// const ref = {
//  scrollEl: document.querySelector(
//   'input#font-size-control'
//  ),
//  textOutputEl:
//   document.querySelector('span#text'),
// };

// ref.scrollEl.addEventListener(
//  'input',
//  () =>
//   (ref.textOutputEl.style.fontSize = `${ref.scrollEl.value}px`)
// );

// -------------------------------------------------------------------------------------------- //

// Write a script that responds to changes in the value of input#font-size-control
// (input event) and changes the inline style of span#text by updating the font-size
// property. As a result, the text size will change responding to scrollbar dragging.

// -------------------------------------------------------------------------------------------- //

const ref = {
 inputEl: document.querySelector(
  'input#font-size-control'
 ),
 spanEl: document.querySelector('span#text'),
};

ref.inputEl.addEventListener('input', onInput);

function onInput(event) {
 ref.spanEl.style.fontSize = `${ref.inputEl.value}px`;
}
