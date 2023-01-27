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

const ingredientsElArray = ingredients.map(
 ingredient => {
  const ingredientEl =
   document.createElement('ul');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  return ingredientEl;
 }
);

const list = document.querySelector(
 'ul#ingredients'
);

list.append(...ingredientsElArray);
