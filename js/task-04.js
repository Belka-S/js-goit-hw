// The counter consists of a span and buttons, which should increase and decrease its value by one.
// Create a variable, counterValue, that will store the current counter value and initialize it with 0.
// Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
// Update the interface with the new value of the variable counterValue.

// -----------------------------------------------------------------------------

let counterValue = 0;

const incrementBtn = document.querySelector(
 '[data-action="increment"]'
);
const decrementBtn = document.querySelector(
 '[data-action="decrement"]'
);

function count() {
 incrementBtn === event.currentTarget
  ? (counterValue += 1)
  : (counterValue -= 1);
 document.querySelector('#value').textContent =
  counterValue;
}

incrementBtn.addEventListener('click', count);
decrementBtn.addEventListener('click', count);

// -----------------------------------------------------------------------------

// incrementBtn.addEventListener('click', () => {
//  counterValue += 1;
//  document.querySelector('#value').textContent =
//   counterValue;
// });

// decrementBtn.addEventListener('click', () => {
//  counterValue -= 1;
//  document.querySelector('#value').textContent =
//   counterValue;
// });
