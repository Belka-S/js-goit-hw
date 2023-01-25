// In HTML, there is an empty ul#ingredients list.
//In JavaScript, there is an array of strings.

const ingredients = [
 'Potatoes',
 'Mushrooms',
 'Garlic',
 'Tomatos',
 'Herbs',
 'Condiments',
];

// Write a script that, for each element in the ingredients array:
// Will create a separate <li> element.
// Will add the ingredient name as its text content.
// Will add the 'item' class to the element.
// Then will insert all <li> to the ul#ingredients list in a single operation.

// -----------------------------------------------------------------------------

function createList(array, selector) {
 const arrayListEl = array.map(element => {
  const listEl = document.createElement('ul');
  listEl.textContent = element;
  listEl.classList.add('item');
  return listEl;
 });

 const list = document.querySelector(selector);

 list.append(...arrayListEl);
}

createList(ingredients, 'ul#ingredients');
