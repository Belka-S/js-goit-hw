// # Module 5 - Lesson 10 - Prototypes and classes

// ## ******************** Example 1 - Blogger ********************

// Write a `Blogger` class to create a blogger object with the following properties:
// - `email` - mail, line
// - `age` - age, number
// - `numberOfPosts` - number of posts, number
// - `topics` - an array of topics the blogger specializes in
// The class expects one parameter - object of settings  with the same name properties.
// Add a `getInfo()` method that returns string:
// `User ${email} is ${age} years old and has ${numberOfPosts} posts`.
// Add the `updatePostCount(value)` method, which in the `value` parameter takes
// number of posts to add to the user.

// --------------------------------------------------------------------------------------------- //class Blogger { constructor({ email, age, numberOfPosts, topics }) { this.email = email; this.age = age; this.numberOfPosts = numberOfPosts; this.topics = topics; }
// --------------------------------------------------------------------------------------------- //  getInfo() { return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`; } updatePostCount(value) { this.numberOfPosts += value; } }

class Blogger {}

const kiwi = new Blogger({
  email: 'kiwi@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

// console.table(kiwi);
// console.log(kiwi.getInfo()); // User kiwi@mail.com is 24 years old and has 20 posts
// kiwi.updatePostCount(5);
// console.log(kiwi.getInfo()); // User kiwi@mail.com is 24 years old and has 25 posts

// ## ******************** Example 2 - Storagе ********************

// Write a `Storage` class that creates objects for managing a warehouse of goods.
// When called, it will receive one argument - the initial array of goods, and write
// it to the `items` property.
// Add class methods:
// - `getItems()` - returns an array of products.
// - `addItem(item)` - receives a new product and adds it to the current ones.
// - `removeItem(item)` - receives the product and, if it exists, removes it from the current.

// --------------------------------------------------------------------------------------------- // class Storage { constructor(array) { this.item = array; } getItems() { return this.item; } addItem(item) { this.item.push(item); }
// --------------------------------------------------------------------------------------------- //   removeItem(item) { const index = this.item.indexOf(item); if (index > -1) this.item.splice(index, 1); } }

class Storage {}

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.table(storage);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]
// storage.addItem('🍌');
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍋');
// console.log(storage.item); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('ss');
// console.log(storage.item);

// ## ******************** Example 3 - User ********************

// Write a class `User` which creates an object with properties `login` and `email`.
// Declare private properties `#login` and `#email`, which can be accessed via
// getter and setter of `login` and `email`.

// --------------------------------------------------------------------------------------------- // class User { #login; #email; constructor({ login, email }) { this.#login = login; this.#email = email; }
// -------------------------------------------------------------------------------------------- //   get login() { return this.#login; } set login(login) { return (this.#login = login); } }

class User {}

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

// console.table(poly);
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// console.table(poly);

// ## ******************** Example 4 - Notes ********************

// Write a `Notes` class that manages the collection of notes in the `note` property.
// A note is an object of array with `text` and `priority` properties. Add a static
// property `Priority` to the class, which will store the object with priorities.
// { LOW: 'low', NORMAL: 'normal', HIGH: 'high' }
// Add methods`addNote(note)`, `removeNote(text)` and `updatePriority(text, newPriority)`.

// --------------------------------------------------------------------------------------------- // class Notes {  static Priority = { LOW: 'low', NORM: 'normal', HIGH: 'high' }; constructor() { this.items = []; } addNote(note) { this.items.push(note); }
// --------------------------------------------------------------------------------------------- //   removeNote(text) { const index = this.items.findIndex(item => item.text === text); if (index > -1) this.items.splice(index, 1); }
// --------------------------------------------------------------------------------------------- //   updatePriority(text, newPriority) { const index = this.items.findIndex(item => item.text === text); if (index > -1) this.items.at(index).priority = newPriority; }}

class Notes {}

const myNotes = new Notes();

// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My second note', priority: Notes.Priority.NORM });
// console.table(myNotes.items);

// myNotes.removeNote('My first note');
// console.table(myNotes.items);

// myNotes.updatePriority('My second note', Notes.Priority.HIGH);
// console.table(myNotes.items);

// ## ******************** Example 5 - Toggle ********************

// Write a `Toggle` class that takes a settings object `{isOpen: boolean}` and
// declares one property `on` - state on/off (true/false). By default the value
// of the `on` property should be`false`.Method toggle() switches state on / off.

// --------------------------------------------------------------------------------------------- // class Toggle { constructor({ isOpen = false } = {}) { this.on = isOpen; } toggle() { this.on = !this.on; } }

class Toggle {}

// const firstToggle = new Toggle({ isOpen: true });
// console.table(firstToggle);
// firstToggle.toggle();
// console.table(firstToggle);

// const secondToggle = new Toggle();
// console.table(secondToggle);
// secondToggle.toggle();
// console.table(secondToggle);
