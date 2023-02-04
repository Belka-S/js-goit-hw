// console.log(
//  'Number of categories:',
//  document.querySelector('ul#categories')
//   .childElementCount
// );

// // ********************

// const allCategories = document.querySelectorAll(
//  'ul#categories .item'
// );

// allCategories.forEach(category => {
//  const categoryTitel = category.firstElementChild;
//  const categoryList =
//   categoryTitel.nextElementSibling;

//  console.log(
//   `Category: ${categoryTitel.textContent}`
//  );
//  console.log(
//   `Elements: ${categoryList.childElementCount}`
//  );
// });

// -------------------------------------------------------------------------------------------- //

// Write a script that:
// Will count and display in the console the number of categories in ul#categories,
// that is, li.item elements. For each li.item element in the ul#categories list,
// will find and display in the console the element header text(<h2> tag) and the
// number of elements in the category(all nested < li >).

// -------------------------------------------------------------------------------------------- //

const liItemEl = document.querySelectorAll(
 'ul#categories li.item'
);

console.log(
 `Number of categories: ${liItemEl.length}`
);

liItemEl.forEach(el => {
 console.log(
  `Category: ${
   el.querySelector('h2').textContent
  }`
 );
 console.log(
  `Elements ${el.querySelectorAll('li').length}`
 );
});
