// 1. получить кнопку
const button = document.querySelector('.test-button');
const secondButton = document.querySelector('.second-button');

// 2. вызвать событие клика на эту кнопку (addEventListener)

button.addEventListener('click', () => {
    console.log(secondButton.style.display);

    if (secondButton.style.display === 'none') {
        secondButton.style.display = 'inline-block';
    } else {
        secondButton.style.display = 'none';
    }
});
