// # Module 2 - Lesson 4 - Functions

// ## ******************** Example 1 - Body mass index ********************
// Write a function `calcBMI(weight, height)` that calculates and returns the body mass
// index of a person. To do this, divide the weight in kilograms by
// square of a person's height in meters.
// The weight and height will be specially passed as strings. Non-integer numbers can be
// specified as `24.7` or `24.7`, i.e. a comma can be used as a decimal separator.
// Body mass index must be rounded to one decimal place;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// -------------------------------------------------------------------------------------------- // function calcBMI(weight, height) { const bmi = weight.replace(',', '.') / Math.pow(height.replace(',', '.'), 2); console.log('bmi: ', bmi.toFixed(2));}

function calcBMI(weight, height) {}

calcBMI('88,3', '1.75');

// ## ******************** Example 2 - Smaller of numbers ********************

// Write a function `min(a,b)` that returns the smaller of the numbers `a` and `b`.

// -------------------------------------------------------------------------------------------- // function min(a, b) { console.log(Math.min(a, b)); }

function min(a, b) {}

min(3, -1); // -1

// ## ******************** Example 3 - Area of a rectangle ********************

// Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
// with sides, the values of which will be passed to the `dimensions` parameter as a string.
// Values are guaranteed to be separated by a space.

// -------------------------------------------------------------------------------------------- // function getRectArea(dimensions) { const dimArray = dimensions.split(' '); const area = dimArray[0] * dimArray[1]; console.log('area =', area); }

function getRectArea(dimensions) {}

getRectArea('8 11');

// ## ******************** Example 4 - Element logging ********************

// Write a function `logItems(items)` that takes an array and uses a `for` loop
// that for each element of the array will print a message to the console in
// format`<item number> - <item value>`.The numbering of elements should start with `1`.
// For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
// will print `1 - Mango` and for index 2 will print `3 - Ajax`.

// -------------------------------------------------------------------------------------------- // function logItems(items) { for (let i = 0; i < items.length; i += 1) { console.log(`${i + 1} - ${items[i]}`); } }

function logItems(items) {}

logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## ******************** Example 5 - Contact logging ********************

// Write a function `printContactsInfo(names, phones)` that prints  to the console the name
// and the user's phone number. The `names` and `phones` parameters will be passed
// strings of names and phone numbers separated by commas. Sequence number of names and
// phone numbers in the rows indicate a match. Number of names and phones
// guaranteed to be the same.

// -------------------------------------------------------------------------------------------- // function printContactsInfo(names, phones) { const namesArray = names.split(','); const phonesArray = phones.split(',');
// -------------------------------------------------------------------------------------------- //   for (let i = 0; i < namesArray.length; i += 1) { console.log(`${namesArray[i]} - ${phonesArray[i]}`); } }

function printContactsInfo(names, phones) {}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);

// ## ******************** Example 6 - Finding the largest element ********************

// Write a function `findLargestNumber(numbers)` that looks for the largest number in array.

// -------------------------------------------------------------------------------------------- // function findLargestNumber(numbers) { console.log(Math.max(...numbers)); }

function findLargestNumber(numbers) {}

findLargestNumber([2, 17, 94, 1, 23, 37]); // 94

// ## ******************** Example 7 - Average value ********************

// Write a `calAverage()` function that takes an arbitrary number of arguments
// and returns their average. All arguments will be only numbers.

// -------------------------------------------------------------------------------------------- // function calAverage() {let sum = 0; for (const arg of arguments) { sum += arg; } console.log((sum / arguments.length).toFixed(1));}

function calAverage() {}

calAverage(27, 43, 2, 8, 36); // 23.2

// ## ******************** Example 8 - Time Formatting ********************

// Write a function `formatTime(minutes)` that will translate the value of `minutes`
// (number of minutes) to a string in hour and minute format `HH:MM`.

// -------------------------------------------------------------------------------------------- // function formatTime(minutes) {const min = String(minutes % 60).padStart(2, '0'); const hour = String(Math.round(minutes / 60)).padStart(2, '0'); console.log(`${hour}:${min}`);}

function formatTime(minutes) {}

formatTime(70); // "01:10"
formatTime(421); // "07001"

// -----------------------------------------------------------------------------

// ## ******************** Example 9 - Collection of courses (includes, indexOf, push, etc.) ********************

// Write functions to work with the `courses` collection of training courses:
// - `addCourse(name)` - adds a course to the end of the collection
// - `removeCourse(name)` - removes a course from the collection
// - `updateCourse(oldName, newName)` - changes the name to a new one
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// -------------------------------------------------------------------------------------------- // function addCourse(name) {if (!courses.includes(name)) {courses.push(name);} else {return console.log('You already have this course');}

function addCourse(name) {}

// -------------------------------------------------------------------------------------------- // function removeCourse(name) {if (courses.includes(name)) {courses.splice(courses.indexOf(name), 1);} else {return console.log('Course with this name was not found');}console.log(courses);}

function removeCourse(name) {}

// -------------------------------------------------------------------------------------------- // function updateCourse(oldName, newName) {if (courses.includes(oldName)) {if (!courses.includes(newName)) {courses.splice(courses.indexOf(oldName), 1, newName);
// -------------------------------------------------------------------------------------------- //     } else {return console.log('You already have this course');}} else {return console.log('Course with this name was not found');} console.log(courses);}

function updateCourse(oldName, newName) {}

addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'

removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
updateCourse('Vue', 'JavaScript'); // 'Course with this name was not found'
updateCourse('CSS', 'JavaScript'); // ' You already have this course'
