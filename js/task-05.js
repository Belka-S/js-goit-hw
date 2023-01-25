// Write a script that, when typing in the input#name-input input ('input' event),
// substitutes its current value into span#name - output.If the input is empty,
// the span should display the "Anonymous" string.

// -----------------------------------------------------------------------------

const nameInput = document.querySelector(
 'input#name-input'
);
const nameOutput = document.querySelector(
 'span#name-output'
);

nameInput.addEventListener(
 'input',
 () => (nameOutput.textContent = nameInput.value)
);
