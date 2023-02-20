// # Module 2 - Lesson 3 - Arrays

// ## ******************** Example 1 - Basic operations with an array ********************

// 1. Create an array `genres` with elements "Jazz" and "Blues".
// 2. Add "Rock" and "Techno" to the end.
// 3. Print the first element of the array to the console.
// 4. Print the last element of the array to the console. The code should work for an array
//    random length.
// 5. Remove the first element and print it to the console.
// 6. Insert "Country" and "Reggae" at the beginning of the array.

// -------------------------------------------------------------------------------------------- //

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock', 'Techno');
// console.table(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// genres.shift();
// console.table(genres);
// genres.unshift('Country', 'Reggae');
// console.table(genres);

// ## ******************** Example 2 - Arrays and Strings ********************

// Write a script to calculate the area of a rectangle with sides, which values
// are stored in the `values` variable as a string. Values guaranteed separated by a space.

const sides = '8 11';

// -------------------------------------------------------------------------------------------- // const sidesArray = sides.split(' '); const area = sidesArray[0] * sidesArray[1]; console.log('area: ', area);

// ## ******************** Example 3 - Array iteration ********************

// Write a script to iterate over the `fruits` array with a `for` loop. For each array element
// print a string in the format `element_number: element_value` to the console.
// Element numbering must start from `1`.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// -------------------------------------------------------------------------------------------- // for (let i = 0; i < fruits.length; i += 1) { console.log(`${i + 1}: ${fruits[i]}`); }

// ## ******************** Example 4 -Arrays and Loops ********************

// Write a script that prints the user's name and phone number to the console. The
// `names` and `phones` variables store strings of names and phone numbers, separated
// by commas.The sequence number of names and phone numbers in the lines indicates a match.
// The number of names and phone numbers is guaranteed to be the same.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

// -------------------------------------------------------------------------------------------- // const namesArray = names.split(','); const phonesArray = phones.split(','); for (let i = 0; i < namesArray.length; i += 1) { console.log(`${namesArray[i]} - ${phonesArray[i]}`); }

// ## ******************** Example 5 - Arrays and Strings ********************

// Write a script that prints to the console all the words of a string except the
// first and the last one. The resulting string must not start or end
// whitespace character. The script should work for any line.

const string = 'Welcome to the future';

// -------------------------------------------------------------------------------------------- // const stringArray = string.split(' '); stringArray.pop(); stringArray.shift(); console.log('stringArray: ', stringArray);

// ## ******************** Example 6 - Arrays and Strings ********************

// Write a script that "unwraps" a string (reverse letter order) and prints
// it to the console.

const greeting = 'Welcome to the future';

// -------------------------------------------------------------------------------------------- // const greetingArray = greeting.split(' '); const reversedArray = []; for (const word of greetingArray) { reversedArray.push(word.split('').reverse().join(''));} const reversedString = reversedArray.join(' ');

// console.log(greeting);
// console.log(reversedString);

// ## ******************** Example 7 - Sorting an array with a loop ********************

// Write a script to sort an array of strings alphabetically by the first letter
// of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// -------------------------------------------------------------------------------------------- // const sortLangs = langs.sort((a, b) => a.localeCompare(b)); console.log('sortLangs: ', sortLangs);

// ## ******************** Example 8 - Search for an element ********************

// Write a script to find the smallest number in an array. The code should work
// for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];

// -------------------------------------------------------------------------------------------- // const min = Math.min(...numbers);

// console.log(min); // 1
