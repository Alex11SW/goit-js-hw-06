const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const categElem = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(element => {
  const listeElem = document.createElement("li");
  listeElem.textContent = element;
  listeElem.classList.add("item");

fragment.appendChild(listeElem);
});
categElem.appendChild(fragment);
 