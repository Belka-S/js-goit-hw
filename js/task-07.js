// Write a script that responds to changes in the value of input#font-size-control
// (input event) and changes the inline style of span#text by updating the font-size
// property. As a result, the text size will change responding to scrollbar dragging.

// -----------------------------------------------------------------------------

const textScroll = document.querySelector(
 'input#font-size-control'
);
const textOutput =
 document.querySelector('span#text');

textScroll.addEventListener(
 'input',
 () =>
  (textOutput.style.fontSize = `${textScroll.value}px`)
);
