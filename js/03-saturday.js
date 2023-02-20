// ************************************ 1-01 ************************************

//1. Використовуючи конструкцію if... else,
//напишіть код, який буде запитувати:
//"Яке офіційне ім'я JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через сповіщення: "Вірно!"
//у протилежному випадку показати:"Не знаєте? ECMAScript!"

// -----------------------------------------------------------------------------

// const name = prompt("Яке офіційне ім'я JavaScript ? ");
// name === 'ECMAScript' ? alert('Вірно!') : alert('Не знаєте? ECMAScript!');

// ************************************ 1-02 ************************************

//За допомогою циклу for напишіть код,
// який буде виводити в консоль всі парні числа від min до max

// -----------------------------------------------------------------------------

// const makeEven = (min, max) => {
//   const even = [];
//   for (let number = min; number <= max; number += 1) {
//     if (number % 2 === 0) {
//       even.push(number);
//     }
//   }
//   console.table(even);
// };
// makeEven(2, 11);

// ************************************ 1-03 ************************************

// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// -----------------------------------------------------------------------------

// const getQuarter = () => {
//   let num = 0;
//   do {
//     num = prompt('Enter number from 0 to 59');
//   } while (num < 0 || num > 59);

//   switch (Math.floor(num / 15)) {
//     case 0:
//       console.log('1-st quarter');
//       break;
//     case 1:
//       console.log('2-nd quarter');
//       break;
//     case 2:
//       console.log('3-d quarter');
//       break;
//     default:
//       console.log('4-th quarter');
//   }
// };
// getQuarter();

// ************************************ 1-04 ************************************

//Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// -----------------------------------------------------------------------------

// const checkLetter = (letter, string) => {
//   string.at(0) === letter ? console.log('Yes') : console.log('No');
// };
// checkLetter('a', 'adfsdfaas');

// ************************************ 1-05 ************************************

//При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення додається до значення змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

// -----------------------------------------------------------------------------

// const getSum = () => {
//   let total = 0;
//   let number = 0;
//   do {
//     number = prompt('Enter any number');
//     if (Number(number) == number) {
//       total += Number(number);
//     }
//   } while (number !== null);
//   alert(`Total sum entered numbers is ${total}`);
// };
// getSum();

// ************************************ 2-01 ************************************

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

const genres = [
 'Jazz',
 'Blues',
 'Rock n Roll',
 'Reggae',
 'Rap',
];

// ----------------------------------------------------------------------------- // const logItems = array => { for (let i = 0; i < array.length; i += 1) {console.log(`${i + 1} - ${array[i]}`); } };

// logItems(genres);

// ************************************ 2-02 ************************************

//Напишіть функцію findSmallerNumber(numbers) яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {}

// -----------------------------------------------------------------------------

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {
//   const min = numbers.reduce((acc, num) => {
//     if (num < acc) {
//       acc = num;
//     }
//     return acc;
//   });
//   console.log(min);
// }

// function findSmallerNumber(numbers) {
//   Array.isArray(numbers)
//     ? console.log(Math.min(...numbers))
//     : console.log('No array found');
// }

// findSmallerNumber(numbers);

// ************************************ 2-03 ************************************

// У нас є масив фільмів. Фільмів всього 7, а унікальних режисерів 3.
// Тому нам потрібно перетворити цей масив на об'єкт ключами якого будуть режисери,
// а їх властивостями - масиви фільмів.E.g.
// { 'Christopher Nolan': ['Interstellar', 'Inception', 'The Dark Knight'] }

const movies = [
 {
  director: 'Christopher Nolan',
  title: 'Interstellar',
 },
 {
  director: 'Quentin Tarantino',
  title: 'Pulp Fiction',
 },
 {
  director: 'Christopher Nolan',
  title: 'Inception',
 },
 {
  director: 'Christopher Nolan',
  title: 'The Dark Knight',
 },
 {
  director: 'Martin Scorsese',
  title: 'Taxi driver',
 },
 {
  director: 'Quentin Tarantino',
  title: 'Inglorious Basterds',
 },
 {
  director: 'Martin Scorsese',
  title: 'Silence',
 },
];

// ----------------------------------------------------------------------------- // const collection = movies.reduce((acc, { director, title }) => {
// ----------------------------------------------------------------------------- //   if (!acc[director]) { acc[director] = []; } acc[director].push(title); return acc;}, {});

// console.table(collection);

// ************************************ 3-01 ************************************

// Натискання на кнопку "SHOW ME" має виводити значення з поля введення.

// -------------------------------------------------------------------------------------------- //

const alertBtnEl = document.querySelector(
 'button#alertButton'
);
const alertInputEl = document.querySelector(
 'input#alertInput'
);

alertBtnEl.addEventListener('click', onClick);

function onClick(e) {
 const noteEl = document.createElement('p');
 noteEl.textContent = alertInputEl.value;
 alertInputEl.after(noteEl);

 setTimeout(() => {
  noteEl.remove();
  alertInputEl.value = '';
 }, 3000);
}

// ************************************ 3-02 ************************************

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// -------------------------------------------------------------------------------------------- //

const ref = {
 btnEl: document.querySelector('#swapButton'),
 leftInputEl: document.querySelector(
  '#leftSwapInput'
 ),
 rightInputEl: document.querySelector(
  '#rightSwapInput'
 ),
};

const onClickSwap = e => {
 const buffer = ref.rightInputEl.value;
 ref.rightInputEl.value = ref.leftInputEl.value;
 ref.leftInputEl.value = buffer;
};

ref.btnEl.addEventListener('click', onClickSwap);

// ************************************ 3-03 ************************************

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// -------------------------------------------------------------------------------------------- //

const inputEl = document.querySelector(
 '#passwordInput'
);
const btnEl = document.querySelector(
 '#passwordButton'
);

btnEl.addEventListener('click', onClickHide);
let pass = null;

function onClickHide(e) {
 if (btnEl.textContent === 'Hide') {
  btnEl.textContent = 'Open';
  pass = inputEl.value;
  inputEl.value = '*************';
  return;
 }
 btnEl.textContent = 'Hide';
 inputEl.value = pass;
}

// ************************************ 3-04 ************************************

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,
// кнопка "Збільшити" - більше на 10 пікселів.

// -------------------------------------------------------------------------------------------- //

const ref2 = {
 boxEl: document.querySelector('#box'),
 divEl: document.querySelector('div.task-three'),
};

ref2.divEl.addEventListener(
 'click',
 onClickChange
);

function onClickChange(e) {
 switch (e.target.id) {
  case 'decrease':
   ref2.boxEl.style.height = `${
    ref2.boxEl.clientHeight - 10
   }px`;
   ref2.boxEl.style.width = `${
    ref2.boxEl.clientWidth - 10
   }px`;
   break;

  case 'increase':
   ref2.boxEl.style.height = `${
    ref2.boxEl.clientHeight + 10
   }px`;
   ref2.boxEl.style.width = `${
    ref2.boxEl.clientWidth + 10
   }px`;
   break;
 }
}

// ************************************ 3-05 ************************************

// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента

// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// -------------------------------------------------------------------------------------------- //

const divEl = document.querySelector('#place');

addEventListener('click', onClickZone);

function onClickZone(e) {
 if (e.target === divEl) {
  console.log('Incide');
  return;
 }
 console.log('Outside');
}

// ************************************ 3-06 ************************************

// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// -------------------------------------------------------------------------------------------- //

const doubBtnEl =
 document.querySelector('#double');
const listElArray = document.querySelectorAll(
 '.list .listItem'
);

doubBtnEl.addEventListener('click', onClickDoub);

function onClickDoub(e) {
 listElArray.forEach(el => {
  const newContent = Number(el.textContent) * 2;
  el.textContent = newContent;
 });
}

// ************************************ 3-07 ************************************

// При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

// -------------------------------------------------------------------------------------------- //

const innerEl = document.querySelector(
 '.innerCircle'
);
const outerEl = document.querySelector(
 '.outerCircle'
);

innerEl.addEventListener('click', onClickSlide);

function onClickSlide(e) {
 if (innerEl.style.position !== 'absolute') {
  addEventListener('mousemove', e => {
   innerEl.style.top = `${
    e.pageY - innerEl.clientHeight / 2
   }px`;
   innerEl.style.left = `${
    e.pageX - innerEl.clientWidth / 2
   }px`;
  });
  innerEl.style.position = 'absolute';
 } else {
  innerEl.style.position = 'static';
 }
}

// ************************************ 3-08 ************************************

// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також
// статистика з інформацією про те, яка кнопка була натиснута скільки разів.

// -------------------------------------------------------------------------------------------- //

const ref3 = {
 divEl: document.querySelector('.statList'),
 resultBtnEl: document.querySelector(
  '#resultButton'
 ),
 resultDivEl: document.querySelector(
  '#resultSection'
 ),
};

ref3.divEl.addEventListener('click', sumOnClick);

let sum = 0;
function sumOnClick(e) {
 if (e.target.nodeName === 'BUTTON') {
  sum += Number(e.target.dataset.number);
 }
}

ref3.resultBtnEl.addEventListener('click', e => {
 ref3.resultDivEl.textContent = sum;
 console.log(sum);
});

// ************************************ 3-09 ************************************

// Видалити зі списку елементи, які позначені.

// -------------------------------------------------------------------------------------------- //

const chkbEl = document.querySelectorAll(
 '.checkboxForm input[type="checkbox"]'
);
const filterBtnEl = document.querySelector(
 'button[type="submit"]'
);

filterBtnEl.addEventListener(
 'click',
 onClickFilter
);

function onClickFilter(e) {
 e.preventDefault();

 chkbEl.forEach(el => {
  if (el.checked) {
   el.remove();

   const labelEl = document.querySelector(
    `label[for="${el.id}"]`
   );
   if (labelEl) {
    labelEl.remove();
   }
  }
 });
}

// ************************************ 3-10 ************************************

// Наведено список студентів. Зробіть можливість сортування списку на ім'я та на прізвище.

// -------------------------------------------------------------------------------------------- //

const ulEl = document.querySelector('ul.people');
const listArr = document.querySelectorAll(
 'ul li.person'
);
const nameBtnEl = document.querySelector(
 '#sortByNameButton'
);
const lastBtnEl = document.querySelector(
 '#sortByLastNameButton'
);

const peopleArray = [];
listArr.forEach(el => peopleArray.push(el));

nameBtnEl.addEventListener('click', onClickSort);
lastBtnEl.addEventListener('click', onClickSort);

function onClickSort(e) {
 e.target.id === 'sortByNameButton'
  ? sortByName(peopleArray)
  : sortByLast(peopleArray);

 ulEl.innerHTML = '';
 peopleArray.forEach(el => ulEl.append(el));
}

function sortByName(array) {
 array.sort((a, b) =>
  a.textContent.localeCompare(b.textContent)
 );
}

function sortByLast(array) {
 array.sort((a, b) =>
  a.textContent
   .split(/\s+/)[1]
   .localeCompare(b.textContent.split(/\s+/)[1])
 );
}

// ************************************ 3-11 ************************************

// Наведено список персонажів. Зробіть фільтр на ім'я/прізвище.

// -------------------------------------------------------------------------------------------- //

const inputFilterEl = document.querySelector(
 'input.contactsFilter'
);
const listEl = document.querySelector(
 'ul.contacts'
);
const liElArray =
 document.querySelectorAll('li.contact');

const contactArray = [];
liElArray.forEach(el => contactArray.push(el));

inputFilterEl.addEventListener('input', onInput);

function onInput(e) {
 const sortContact = contactArray.filter(el =>
  el.textContent
   .toLowerCase()
   .includes(inputFilterEl.value.toLowerCase())
 );

 listEl.innerHTML = '';
 sortContact.forEach(el => listEl.append(el));
}

// ************************************ 3-12 ************************************

// Клік по кнопці замінює символ першого поля введення
// на символ з другого поля введення в усьому тексті.
// Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

// -------------------------------------------------------------------------------------------- //
const ref4 = {
 fromEl: document.querySelector('input#from'),
 toEl: document.querySelector('input#to'),
 btnEl: document.querySelector('#replaceButton'),
 textEl: document.querySelector('p.text'),
};

ref4.fromEl.addEventListener(
 'input',
 onInputShow
);
ref4.toEl.addEventListener('input', onInputShow);
ref4.btnEl.addEventListener('click', onClickChng);

let content = '';

function onInputShow(e) {
 replace(
  ref4.fromEl.value,
  `<span>${ref4.fromEl.value}</span>`
 );

 const spanEl =
  ref4.textEl.querySelectorAll('span');
 spanEl.forEach(
  el => (el.style.backgroundColor = 'lightsalmon')
 );
}

function onClickChng(e) {
 replace(ref4.fromEl.value, ref4.toEl.value);
}

function replace(value, newValue) {
 content = ref4.textEl.textContent;
 ref4.textEl.innerHTML = content.replaceAll(
  value,
  newValue
 );
}

// ************************************ 3-13 ************************************

// Коло має зникати при наведенні на нього.
// При цьому позиція сусідніх кіл має залишатися незмінною.

// -------------------------------------------------------------------------------------------- //

const divUlEl = document.querySelector('ul.grid');

divUlEl.addEventListener(
 'mouseover',
 onMouseover
);
divUlEl.addEventListener('mouseout', onMouseout);

function onMouseover(e) {
 if (e.target.classList.contains('gridItem')) {
  e.target.style.backgroundColor = 'transparent';
  e.target.style.borderColor = 'transparent';
  e.target.style.transition =
   'background-color 300ms linear';
 }
}

function onMouseout(e) {
 if (e.target.hasAttribute('style')) {
  setTimeout(() => {
   e.target.removeAttribute('style');
  }, 500);
 }
}
