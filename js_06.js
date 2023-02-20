// # Module 3 Lesson 6. Destructuring and rest/spread

// ## ******************** Example 1 - Destructuring ********************

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// -------------------------------------------------------------------------------------------- // function calcBMI({weight, height}) {}

function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  // console.log(Number((numericWeight / numericHeight ** 2).toFixed(1)));
}

// calcBMI({
//   weight: '88,3',
//   height: '1.75',
// });

// calcBMI({
//   weight: '68,3',
//   height: '1.65',
// });

// calcBMI({
//   weight: '118,3',
//   height: '1.95',
// });

// ## ******************** Example 2 - Destructuring ********************

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// -------------------------------------------------------------------------------------------- // function printContactsInfo({ names, phones }) {}

function printContactsInfo() {
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

// ## ******************** Example 3 - Deep destructuring ********************

// Rewrite the property so that it uses one object's parameter instead of a set
// of independent arguments.

// -------------------------------------------------------------------------------------------- //function getBotReport({companyName, bots: { repair: repairBots, defence: defenceBots },}) {}

function getBotReport(companyName, repairBots, defenceBots) {
  // console.log(`${companyName} has ${repairBots + defenceBots} bots in stock`);
}

getBotReport({
  companyName: 'Cyberdyne Systems',
  bots: {
    repair: 150,
    defence: 50,
  },
}); // "Cyberdyne Systems has 200 bots in stock"

// ## ******************** Example 4 - Destructuring ********************

// Rewrite the function so that it accepts a parameters object with properties `companyName`
// and `stock` and display a report about the number of goods in the warehouse of any companies.

// -------------------------------------------------------------------------------------------- // function getStockReport({ companyName, stock }) {let sum = 0; for (const key of Object.keys(stock)) {sum += stock[key];} console.log(`${companyName} has ${sum} item`);}

function getStockReport() {}

getStockReport({
  companyName: 'Cyberdyne Systems',
  stock: {
    repairBots: 150,
    defenceBots: 50,
  },
}); // "Cyberdyne Systems has 200 items in stock"

getStockReport({
  companyName: 'Belacci',
  stock: {
    shoes: 20,
    skirts: 10,
    hats: 5,
  },
}); // "Belacci has 35 item in stock"

// ## ******************** Example 5 - operation Spread ********************

// Extend the `createContact(partialContact)` function so that it returns a new
// contact object with `id` and `createdAt` properties added, as well as `list` with
// value "default" if there is no such property in `partialContact`.

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// -------------------------------------------------------------------------------------------- // function createContact({ list = 'default', ...rest }) {return { ...rest, list, id: generateId(), createdAt: Date.now() };}

function createContact() {}

// console.table(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.table(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// ## ******************** Example 6 - Operation rest ********************

// Write a `transformUsername(user)` function to return a new object
// with `fullName` property instead of `firstName` and `lastName`.

// -------------------------------------------------------------------------------------------- // function transformId({ firstName, lastName, ...rest }) {return { fullName: `${firstName} ${lastName}`, ...rest };}

function transformId() {}

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
