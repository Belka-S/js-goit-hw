// const ref = {
//  incrBtnEl: document.querySelector(
//   '[data-action="increment"]'
//  ),
//  decrBtnEl: document.querySelector(
//   '[data-action="decrement"]'
//  ),
// };

// let counterValue = 0;

// function count() {
//  ref.incrBtnEl === event.currentTarget
//   ? (counterValue += 1)
//   : (counterValue -= 1);
//  document.querySelector('#value').textContent =
//   counterValue;
// }

// ref.incrBtnEl.addEventListener('click', count);
// ref.decrBtnEl.addEventListener('click', count);

// -------------------------------------------------------------------------------------------- //

// The counter consists of a span and buttons, which should increase and decrease its value by one.
// Create a variable, counterValue, that will store the current counter value and initialize it with 0.
// Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
// Update the interface with the new value of the variable counterValue.

// -------------------------------------------------------------------------------------------- //

const ref = {
 counterDivEl: document.querySelector(
  'div#counter'
 ),
 spanEl: document.querySelector('span#value'),
};
// Object.values(ref).forEach(el => console.log(el));
let counterValue = 0;
ref.counterDivEl.addEventListener(
 'click',
 onBtnClick
);

function onBtnClick(event) {
 if (event.target.type !== 'button') {
  return; // event.target.nodeName !== 'BUTTON'
 }
 event.target.dataset.action === 'decrement'
  ? (counterValue -= 1)
  : (counterValue += 1);
 ref.spanEl.textContent = counterValue;
}
