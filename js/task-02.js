const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const categElem = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const listeElem = document.createElement("li");
  listeElem.textContent = element;
  listeElem.classList.add("item");

  categElem.appendChild(listeElem);
});
