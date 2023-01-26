// Write a script that changes the background colors of the <body> element via inline
// style when clicking on button.change - color and outputs the color value to span.color.
// Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
 return `#${Math.floor(
  Math.random() * 16777215
 ).toString(16)}`;
}

// -----------------------------------------------------------------------------

const ref = {
 bodyEl: document.querySelector('body'),
 spanEl: document.querySelector('span.color'),
 btnEl: document.querySelector(
  'button.change-color'
 ),
};

ref.btnEl.addEventListener('click', onBtnClick);
function onBtnClick(event) {
 function getRandomHexColor() {
  return `#${Math.floor(
   Math.random() * 16777215
  ).toString(16)}`;
 }
 const randomColor = getRandomHexColor();

 ref.bodyEl.style.backgroundColor = randomColor;
 ref.spanEl.textContent = randomColor;
}
