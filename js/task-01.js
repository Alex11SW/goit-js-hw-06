const categoriesList = document.querySelector('#categories');
const categoriItem = categoriesList.querySelectorAll('li.item');
console.log('Number of categories: ', categoriItem.length);
categoriItem.forEach(categoriIte => {
    const categTitle = categoriIte.querySelector('h2').textContent;
    const categElem = categoriIte.querySelectorAll('ul li');
    console.log(`Category: ${categTitle}`);
    console.log(`Elements: ${categElem.length}`);
});