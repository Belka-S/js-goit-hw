// Write a script that:
// Will count and display in the console the number of categories in ul#categories,
// that is, li.item elements. For each li.item element in the ul#categories list,
// will find and display in the console the element header text(<h2> tag) and the
// number of elements in the category(all nested < li >).

// -----------------------------------------------------------------------------

function countCategories() {
 const allCategories = document.querySelectorAll(
  'ul#categories .item'
 );
 return console.log(
  `Number of categories: ${allCategories.length}`
 );
}
countCategories();

// ********************

console.log(
 'Number of categories:',
 document.querySelector('ul#categories')
  .childElementCount
);

// -----------------------------------------------------------------------------

function getCategoryStructure() {
  console.log('********************');
  
 const allCategories = document.querySelectorAll(
  'ul#categories .item'
 );

 allCategories.forEach(category => {
  const categoryHeader =
   category.firstElementChild;
  console.log(
   `Categiry: ${categoryHeader.textContent}`
  );

  const categoryList =
   categoryHeader.nextElementSibling;
  console.log(
   `Elements: ${categoryList.childElementCount}`
  );
 });
}
getCategoryStructure();
