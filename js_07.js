// # Module 4. Lesson 7. Callbacks. Arrow functions. forEach

// ## ******************** Example 1 - Function callback ********************

// Write the following functions:
// - `createProduct(obj, callback)` - accepts a product object without an id, and also
//   callback. The function creates a product object by adding a unique identifier to it in
//   property `id` and calls the callback passing it the created object.
// - `logProduct(product)` - callback accepting a product object and logging it to
//   console
// - `logTotalPrice(product)` - callback receiving product object and logging
//   the total price of the item in the console

// -------------------------------------------------------------------------------------------- // function createProduct(obj, callback) {const product = { ...obj, id: Math.random().toString(36).substr(2, 9) };callback(product);}
// -------------------------------------------------------------------------------------------- // function logProduct(product) {console.log(product);}  function logTotalPrice(product) {console.log(product.quantity * product.price);}

function createProduct(obj, callback) {}

function logProduct(product) {}

function logTotalPrice(product) {}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ## ******************** Example 2 - Function callback ********************

// Add methods `withdraw(amount, onSuccess, onError)` to the `account` object and
// `deposit(amount, onSuccess, onError)`, where the first parameter is the amount of
// the operation, and second and third are callbacks.
// The `withdraw` method raises onError if amount is greater than TRANSACTION_LIMIT or
// this.balance, and onSuccess otherwise.
// `deposit` method raises onError if amount is greater than TRANSACTION_LIMIT or less
// or either zero and onSuccess otherwise.

// -------------------------------------------------------------------------------------------- //

const account = {
  TRANSACTION_LIMIT: 1000,
  balance: 0,
  transactions: [],

  deposit(amount, onSuccess, onError) {},

  withdraw(amount, onSuccess, onError) {},
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

// account.deposit(900, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(700, handleSuccess, handleError);

// -------------------------------------------------------------------------------------------- //

// const account = {
//   TRANSACTION_LIMIT: 1000,
//   balance: 0,
//   transactions: [],

//   deposit(amount, onSuccess, onError) {
//     if (amount <= this.TRANSACTION_LIMIT && amount > 0) {
//       this.balance += amount;
//       const message = `Deposited ${amount}, Balance ${this.balance}`;
//       onSuccess(message);
//     } else if (amount <= 0) {
//       const message = `Negative amount.`;
//       onError(message);
//     } else {
//       const message = `Limmit ${this.TRANSACTION_LIMIT} is exceeded.`;
//       onError(message);
//     }
//   },

//   withdraw(amount, onSuccess, onError) {
//     if (
//       amount > 0 &&
//       amount <= this.TRANSACTION_LIMIT &&
//       amount <= this.balance
//     ) {
//       this.balance -= amount;
//       const message = `Withdrawed ${amount}, Balance ${this.balance}`;
//       onSuccess(message);
//     } else if (amount <= 0) {
//       const message = `Negative amount.`;
//       onError(message);
//     } else if (amount > this.TRANSACTION_LIMIT) {
//       const message = `Limmit ${this.TRANSACTION_LIMIT} is exceeded.`;
//       onError(message);
//     } else {
//       const message = `Not enough funds`;

//       onError(message);
//     }
//   },
// };

// ## ******************** Example 3 - Function callback ********************

// Write a function `each(array, callback)` that takes as its first parameter
// array, and the second - a function that will be applied to each element of the array.
// The each function must return a new array whose elements will be the results
// of callback call.

// -------------------------------------------------------------------------------------------- // function each(array, callback) {const newArray = []; for (const item of array) {newArray.push(callback(item));} return newArray;}

function each(array, callback) {}

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ## ******************** Example 4 - Arrow functions ********************
// Make the code refactoring  using arrow functions.
// -------------------------------------------------------------------------------------------- //

function createProd(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProd(product) {
  console.log(product);
}

function logTotalSum(product) {
  console.log(product.price * product.quantity);
}

// createProd({ name: '🍎', price: 30, quantity: 3 }, logProd);
// createProd({ name: '🍋', price: 20, quantity: 5 }, logTotalSum);

// -------------------------------------------------------------------------------------------- //

// const createProd = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProd = product => {
//   console.log(product);
// };

// const logTotalSum = product => {
//   console.log(product.price * product.quantity);
// };

// ## ******************** Example 5 - Arrow functions ********************

// Make the code refactoring  using arrow functions.

// -------------------------------------------------------------------------------------------- // const madeSuccess = message => {console.log(`✅ Success! ${message}`);}; const madeError = message => {console.log(`❌ Error! ${message}`);};

const TRANSACTION_LIMIT = 1000;

const accnt = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function madeSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function madeError(message) {
  console.log(`❌ Error! ${message}`);
}

// accnt.withdraw(2000, madeSuccess, madeError);
// accnt.withdraw(600, madeSuccess, madeError);
// accnt.withdraw(300, madeSuccess, madeError);
// accnt.deposit(1700, madeSuccess, madeError);
// accnt.deposit(0, madeSuccess, madeError);
// accnt.deposit(-600, madeSuccess, madeError);
// accnt.deposit(600, madeSuccess, madeError);

// ## ******************** Example 6 - Inline Arrow Functions ********************

// Make the code refactoring using arrow functions.

// -------------------------------------------------------------------------------------------- //

function every(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

// console.log(
//   every([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   every([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   every([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   every([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   every([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// -------------------------------------------------------------------------------------------- //

// const every = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(every([64, 49, 36, 25, 16], value => value * 2));
// console.log(every([64, 49, 36, 25, 16], value => value - 10));
// console.log(every([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(every([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(every([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ## ******************** Example 7 - forEach method ********************

// Make the code refactoring using `forEach` method and arrow functions.

// -------------------------------------------------------------------------------------------- // const logItems = items => {console.log(items); items.forEach((item, i) => console.log(`${i + 1} - ${items[i]}`));};

function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## ******************** Example 8 - forEach method ********************

// Make the code refactoring using `forEach` method and arrow functions.

// -------------------------------------------------------------------------------------------- // const printContactsInfo = ({ names, phones }) => {const nameList = names.split(','); const phoneList = phones.split(','); nameList.forEach((name, i) => console.log(`${name}: ${phoneList[i]}`));};

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ## ******************** Example 9 - forEach method ********************

// Make the code refactoring using `forEach` method and arrow functions.

// -------------------------------------------------------------------------------------------- // const calсulateAverage = (...args) => {let total = 0; args.forEach(arg => (total += arg)); return total / args.length;};

function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
