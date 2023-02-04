// const ref = {
//  inputEl: document.querySelector(
//   'input#name-input'
//  ),
//  outputEl: document.querySelector(
//   'span#name-output'
//  ),
// };

// ref.inputEl.addEventListener('input', getName);
// function getName() {
//  ref.outputEl.textContent = ref.inputEl.value
//   ? ref.inputEl.value
//   : 'Anonymous';
// }

// -------------------------------------------------------------------------------------------- //

// Write a script that, when typing in the input#name-input input ('input' event),
// substitutes its current value into span#name - output.If the input is empty,
// the span should display the "Anonymous" string.

// -------------------------------------------------------------------------------------------- //

const ref = {
 inputEl: document.querySelector(
  'input#name-input'
 ),
 spanEl: document.querySelector(
  'span#name-output'
 ),
};
// Object.values(ref).forEach(el => console.log(el));
ref.inputEl.addEventListener('input', onInput);

function onInput(event) {
 ref.spanEl.textContent = ref.inputEl.value
  ? ref.inputEl.value
  : 'Anonymous';
}
