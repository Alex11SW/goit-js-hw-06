
const decButton = document.querySelector('[data-action="decrement"]');
const icButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let sumVal = 0;

const increment = () => {
    sumVal += 1;
    upValue();
};

const decrement = () => {
    sumVal -= 1;
    upValue();
};

const upValue = () => {
    valueSpan.textContent = sumVal;
};

icButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);