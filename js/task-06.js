// const inputEl = document.querySelector(
//  'input#validation-input'
// );

// function paintBorder() {
//  inputEl.value.length !==
//  Number(inputEl.dataset.length)
//   ? inputEl.classList.add('invalid')
//   : inputEl.classList.add('valid');
// }

// inputEl.addEventListener('focus', () =>
//  inputEl.removeAttribute('class')
// );

// inputEl.addEventListener('blur', () => {
//  inputEl.value
//   ? paintBorder()
//   : inputEl.removeAttribute('class');
// });

// -------------------------------------------------------------------------------------------- //

// Write a script that, when focus on input is lost (blur event),
// checks its contents for the correct number of entered characters.
// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green,
// or red with a wrong number. To add styles, use the valid and invalid CSS classes,
// which you can find in the task source files.

// -------------------------------------------------------------------------------------------- //

const inputEl = document.querySelector(
 'input#validation-input'
);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
 inputEl.className =
  inputEl.value.length ===
  Number(inputEl.dataset.length)
   ? 'valid'
   : 'invalid';
 if (!inputEl.value.length) {
  inputEl.removeAttribute('class');
 }
}
