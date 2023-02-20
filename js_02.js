// # Module 1. Lesson 2. Branching. Cycles

// ## ******************** Example 1 - User Input and Branching ********************

// Using the if..else and prompt constructs, write code that will ask:
// `"What is the official name of JavaScript?"`. If the user enters
// `ECMAScript`, then show an alert with the string `"Correct!"`, otherwise -
// `"Do not know? ECMAScript!"`

// -------------------------------------------------------------------------------------------- //  const nameJS = prompt('What is the official name of JavaScript?'); if (nameJS === 'ECMAScript') { alert('Correct!');} else alert('Do not know? ECMAScript!');

// ## ******************** Example 2 - Time display (if...else) ********************

// Write a script to display hours and minutes in the browser console as a string
// format `"14 hours 26 minutes."`. If the value of the `minutes` variable is `0`, then
// output the string `"14 o'clock"`, without minutes.
const hours = 14;
const minutes = 26;

// -------------------------------------------------------------------------------------------- // if (minutes === 0) { console.log(`${hours} hours`); } else console.log(`${hours} hours ${minutes} minutes`);

// ## ******************** Example 3 - Branching ********************

// Write a script that prints the string `"This is a positive number"` to the console,
// if the user entered a number greater than zero in the prompt. If zero was entered, output
// to the console the string `"This is zero"`. If a negative number is passed, in the console
// should be the string `"This is a negative number"`.

// -------------------------------------------------------------------------------------------- // if (userInput) { if (userInput == 0) { console.log("It's zero"); } else if (Number(userInput)) { userInput < 0
// -------------------------------------------------------------------------------------------- //       ? console.log("It's a negative number") : console.log("It's a positive number"); } else console.log('Try again!');
// -------------------------------------------------------------------------------------------- //       } else { console.log('Try again!'); }

// const userInput = prompt('Enter the number');

// ## ******************** Example 4 - Nested branches ********************

// Write a script that compares the numbers in variables `a` and `b`. If both
// values greater than `100`, then print the maximum of them to the console. Otherwise,
// the console should show the sum of the value `a` + `b` and the number 1000.
const a = 20;
const b = 180;

// -------------------------------------------------------------------------------------------- // a > 100 && b > 100 ? a > b ? console.log(a) : console.log(b) : console.log(b + a + 1000);

// ## ******************** Example 5 - Link Formatting (endsWith) ********************

// Write a script that checks if the value of the `link` variable ends
// symbol `/`. if not, add this character to the end of the `link` value. Use
// `if...else` construction.
let link = 'https://my-site.com/about';

// -------------------------------------------------------------------------------------------- // if (!link.endsWith('/')) { link += '/'; }

// console.log(link);

// ## ******************** Example 6 - Link formatting (includes and logical "AND") ********************

// Write a script that checks if the value of the `link` variable ends by
// symbol `/`. If not, append this character to the end of the `link` value, but only
// if `link` contains the substring `"my-site"`. Use construction `if...else`.
let mysite = 'https://somesite.com/my-siteabout';

// -------------------------------------------------------------------------------------------- // if (!mysite.endsWith('/') && mysite.includes('my-site')) {mysite += '/'}

// console.log(mysite);

// ## ******************** Example 7 - Link formatting (ternary operator) ********************

// Make code refactoring of the task number 4 code using ternary operator.
let site = 'https://somesite.com/about';

// -------------------------------------------------------------------------------------------- // site.includes('my-site') && !site.endsWith('/') ? (site += '/') : null;

// console.log(site);

// ## ******************** Example 8 - if...else and logical operators ********************

// Write a script that will output a string to the browser console depending on
// `hour` variable values.
// If the value of the variable `hours`:
// - less than `17`, output the string `"Pending"`
// - greater than or equal to `17` and less than or equal to 24, output the string `"Expires"`
// - greater than `24` , output the string `"Overdue"`
const hour = 10;

// -------------------------------------------------------------------------------------------- // if (hour < 17) { console.log('Pending'); } else if (hour <= 24) { console.log('Expires'); } else console.log('Overdue');

// ## ******************** Example 9 - Project submission deadline (switch) ********************

// Write a script to display the project deadline time. Use `if...else` construction.
// - If there are 0 days before the deadline - output the string `"Today"`
// - If it's 1 day before the deadline - output the string `"Tomorrow"`
// - If it's 2 days before the deadline - output the string `"The day after tomorrow"`
// - If it's 3+ days before the deadline - print the string `"Date in the future"`
const daysUntilDeadline = 5;

// -------------------------------------------------------------------------------------------- // switch (daysUntilDeadline) { case 0: console.log('Today'); break; case 1: console.log('Tomorrow'); break;
// -------------------------------------------------------------------------------------------- //   case 2: console.log('The day after tomorrow'); break; default: console.log('Date in the future'); }

// ## ******************** Example 10 - The for loop ********************

// Write a for loop that prints numbers in ascending order to the browser console from `min`
// to `max`, but only if the number is a multiple of `5`.
const max = 108;
const min = 21;

// -------------------------------------------------------------------------------------------- //for (let i = min; i < max; i += 1) { if (i % 5 === 0) { console.log(i); } }

// ## ******************** Example 11 - User Input and Branching ********************

// Write a script that will ask for login using `prompt` and log
// result in browser console.
// - If the visitor enters `"admin"`, then `prompt` prompts for a password
// - If nothing is entered or the Esc key is pressed - print the line `"Canceled"`
// - Otherwise print the string `"I don't know you"`
// Check password like this:
// - If the password is `"qwe"`, then output the string `"Hello!"`
// - Else output the string `"Wrong password"`

// -------------------------------------------------------------------------------------------- // if (!login) { console.log('Canceled'); } else if (login !== 'admin') {console.log("I don't know you"); } else {
// -------------------------------------------------------------------------------------------- //   const pass = prompt('Enter password'); pass === 'qwe' ? console.log('Hello!') : console.log('Wrong password');}

// const login = prompt('Enter login.');
