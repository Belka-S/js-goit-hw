// const newObj = { x: 2 };
// console.log(newObj.__proto__ === Object.prototype);

// Old syntax
function Album({ band, year, title, genre, tracks, rating } = {}) {
  this.band = band;
  this.year = year;
  this.title = title;
  this.genre = genre;
  this.tracks = tracks;
  this.rating = rating;
}
const violator = new Album({
  band: 'Depeche Mode',
  title: 'viOLator',
  year: 1990,
  genre: 'electronic',
  rating: 8,
  tracks: [
    'World In my eyes',
    'Sweetest Perfection',
    'Personal Jesus',
    'Halo',
    'Waiting FOR the night',
    'Enjoy the Silence',
    'Policy of Truth',
    'Blue Dress',
    'Clean',
  ],
});
Album.sourse = { sourse: 'torrent.tracker' };
Album.prototype.changeRating = function (newRating) {
  this.rating = newRating;
};
// console.dir(Album);
violator.changeRating(10);
// console.log('violator: ', violator);

// const qwe = Object.create(violator);
// qwe.changeRating(9);
// console.log('qwe: ', qwe);

// -----------------------------------------------------------------------------

// Modern syntax
class List {
  static sourse = 'torrent.tracker';
  static listInfo(object) {
    console.dir(object);
  }

  #info() {
    console.dir(`${this.band} ${this.year} "${this.title}"`);
  }

  #quality;

  constructor({ band, year, title, genre, tracks, rating, quality } = {}) {
    this.band = band;
    this.year = year;
    this.title = title;
    this.genre = genre;
    this.tracks = tracks;
    this._rating = rating;
    this.#quality = quality;
  }

  get info() {
    this.#info();
  }

  get quality() {
    console.log('quality:', this.#quality);
  }

  set quality(quality) {
    this.#quality = quality;
  }

  get rating() {
    console.log('rating: ', this._rating);
  }

  set rating(newRating) {
    console.log(`rating ${this._rating} to be set --> ${newRating}`);
    this._rating = newRating;
  }

  // changeRating(newRating) {
  //   this._rating = newRating;
  // }
}

const sofad = new List({
  band: 'Depeche Mode',
  title: 'Songs of Faith and Devotion',
  year: 1993,
  genre: 'rock',
  rating: 5,
  tracks: [
    'I Feel You',
    'Walking in My Shoes',
    'Condemnation',
    'Mercy in You',
    'Judas',
    'In Your Room',
    'Get Right with Me',
    'Interlude #4 (My Kingdom Comes)',
    'Rush',
    'One Caress',
    'Higher Love',
  ],
});

// console.dir(List);
// sofad.info;
// sofad.quality = '1-st press';
// sofad.quality;
// List.listInfo(sofad);
// sofad.rating = 10;
// sofad.rating;

// -----------------------------------------------------------------------------

// class User {
//   static #takenEmails = [];

//   static emailsTaken() {
//     return console.table(User.#takenEmails);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });
// const poly = new User({ email: 'poly@mail.com' });

// User.emailsTaken();

// -----------------------------------------------------------------------------

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     } else return 'Success! Price is within acceptable limits';
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// -----------------------------------------------------------------------------

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }
// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
