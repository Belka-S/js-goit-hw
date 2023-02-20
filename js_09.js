// # Module 5 - Lesson 9 - Function call context and this

// ## ******************** Example 1 - Jewelry workshop ********************

// Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
// calculates and returns the total cost of stones with that name, price, and
// quantity from the `stones` property.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  // -------------------------------------------------------------------------------------------- //   calcTotalPrice(stoneName) { let total = 0; this.stones.forEach(({ name, price, quantity }) => {
  // -------------------------------------------------------------------------------------------- //       if (name === stoneName) {total = price * quantity;}});return total;},};

  calcTotalPrice(stoneName) {},
};

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ## ******************** Example 2 - Phone book ********************

// Make methods' refactoring of the `phonebook` object to make the code work.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// -------------------------------------------------------------------------------------------- //

const phonebook = {};

// console.table(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.table(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// ## ******************** Example 3 - Calculator ********************

// Create a `calculator` object with three methods:

// - `read(a, b)`- takes two values and stores them as object properties.
// - `add()` - returns the sum of the stored values.
// - `mult()` - multiplies the stored values and returns the result.

// -------------------------------------------------------------------------------------------- // const calculator = { read(a, b) { this.a = a; this.b = b; },
// -------------------------------------------------------------------------------------------- //   sum() { const { a, b } = this; console.log('a + b =', a + b); },
// -------------------------------------------------------------------------------------------- //   mult() { console.log('a * b =', this.a * this.b); }, };

const calculator = {};

// calculator.read(5, 12);
// calculator.sum();
// calculator.mult();
// console.table(calculator);

// const qwe = {};
// calculator.read.apply(qwe, [2, 3]);
// console.log(qwe);
// calculator.sum.call(qwe);
// const onBind = calculator.sum.bind(qwe);
// onBind();

// ## ******************** Example 4 - Variable vs property ********************

const object = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  },
};
// console.log(object.getMessage()); // What is logged?

// ## ******************** Example 5 - Cat name ********************

function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged?
const { getName } = cat;
// console.log(getName());     // What is logged?

// ## ******************** Example 6 - Delayed greeting ********************

const object1 = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message); // What is logged?
  },
};
// setTimeout(object1.logMessage, 1000);

// ## ******************** Example 7 - Artificial method ********************

// How can you call logMessage function so that it logs "Hello, World!"?

const object2 = {
  message: 'Hello, World!',
};
function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// -------------------------------------------------------------------------------------------- // logMessage.call(object); logMessage.apply(object); const boundLogMessage = logMessage.bind(object); boundLogMessage();

// ## ******************** Example 8 - Greeting and farewell ********************

const object3 = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};
// console.log(object3.greet()); // What is logged?
// console.log(object3.farewell()); // What is logged?

// ## ******************** Example 9 - Calling arguments ********************

var length = 4;
function callback1() {
  console.log(this.length); // What is logged?
}
const object5 = {
  length: 5,
  method() {
    arguments[0]();
  },
};
// object5.method(callback1, 1, 2);
