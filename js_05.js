// # Module 3. Lesson 1. Objects

// ## ******************** Example 1 - Object Basics ********************

// Write a script that, for the `user` object, successively:
// - adds a `mood` field with value `'happy'`
// - replaces the value `hobby` to `'skydiving'`
// - replaces `premium` to `false`
// - prints the contents of the `user` object in `key:value` format using
//   `Object.keys()` and `for...of`

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// -------------------------------------------------------------------------------------------- // user.mood = 'happy'; user.hobby = 'skydiving'; user.premium = false; for (const key of Object.keys(user)) {console.log(`${key} : ${user[key]}`);}

// console.table(user);

// ## ******************** Example 2 -  Object.values() method ********************

// We have an object that stores our team salaries. Write code for
// summing all salaries and store the result in the sum variable. Should
// get 390. If the `salaries` object is empty, then the result should be 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// -------------------------------------------------------------------------------------------- // let sum = 0; for (const name of Object.keys(salaries)) {sum += salaries[name];}

// console.log('sum: ', sum);

// ## ******************** Example 3 - Array of objects ********************

// Write a function `calcTotalPrice(stones, stoneName)` that takes an array of objects
// and a string with the name of the stone.The function calculates and returns the
// total cost of stones with the same name, price and quantity from the object.

const array = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 400, quantity: 7 },
  { name: 'Rubble', price: 200, quantity: 2 },
];

// -------------------------------------------------------------------------------------------- // function calcTotalPrice(stones, stoneName) {for (const stone of stones) {if (stone.name === stoneName) {return console.log(stone.price * stone.quantity);}}}

function calcTotalPrice(stones, stoneName) {}

calcTotalPrice(array, 'Sapphire');

// ## ******************** Example 4 - Complex tasks ********************

// Write a script for managing a personal account of an Internet bank. There is an `account` object
// in which it is necessary to implement methods for working with balance and transaction history.
//  * There are only two types of transaction.
//  * You can deposit or withdraw money from your account.
// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {},
//   deposit(amount) {},
//   withdraw(amount) {},
//   getBalance() {},
//   find(id) {},
//   getTotal(type) {},
// };
const accountExample = {
  // Current account balance
  balance: 0,
  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {},

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {},

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Принимает сумму танзакции.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {},

  /*
   * The method returns the current balance
   */
  getBalance() {},

  /*
   * The method searches and returns the transaction object by id
   */
  find(number) {},

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTotal(type) {},
};
//  * Each transaction is an object with properties: id, type and amount
const transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// -------------------------------------------------------------------------------------------- //

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {},
  deposit(amount) {},
  withdraw(amount) {},
  getBalance() {},
  find(id) {},
  getTotal(type) {},
};

account.deposit(100);
account.withdraw(60);
account.deposit(200);
account.withdraw(80);
account.getBalance();
account.find(3);
account.find(9);
account.getTotal('withdraw');
// console.table(account.transactions);

// -------------------------------------------------------------------------------------------- //
// const account = {
//   balance: 0,
//   num: 1,
//   transactions: [],
//   createTransaction(amount, type) {
//     this.transactions.push({ number: this.num, [type]: amount });
//   },
//   deposit(amount) {
//     this.createTransaction(amount, transaction.DEPOSIT);
//     this.balance += amount;
//     this.num += 1;
//   },
//   withdraw(amount) {
//     if (this.balance > 0) {
//       this.createTransaction(amount, transaction.WITHDRAW);
//       this.balance -= amount;
//       this.num += 1;
//     }
//   },
//   getBalance() {
//     console.log(this.balance);
//   },
//   find(number) {
//     if (number <= this.num) {
//       console.log(this.transactions.at(number - 1));
//     }
//   },
//   getTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction[type]) {
//         total += transaction[type];
//       }
//     }
//     console.log(`Total ${type} = ${total}`);
//   },
// };
