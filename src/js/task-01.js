const categoriesList = document.querySelector('#categories');
const categoriItem = categoriesList.querySelectorAll('li.item');
console.log('Number of categories: ', categoriItem.length);
categoriItem.forEach(categoriItem => {
    const categTitle = categoriItem.querySelector('h2').textContent;
    const categElem = categoriItem.querySelector('ul li');
    console.log('Category: ${categoriItem}');
    console.log('Elements: ${categElem}');
});