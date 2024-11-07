const closeModal = document.querySelector('.close__modal');
const button = document.querySelector('.cancel');
const myModal = document.querySelector('.annoying__modal');

closeModal.addEventListener('click', () => {
    myModal.classList.toggle('active');
});

let increment = 10;
let time = 10;
function changeCounterText() {
    button.innerHTML += `<span class="counter">${increment}</span>`;
    if (button.querySelector('class')) {
        button.querySelector('class').remove();
    }
    increment++;
}

let timer = setInterval(() => {
    if (time > 0) {
        changeCounterText();
    } else {
        clearInterval(item);
        button.querySelector('class') = '';
    }
}, 1000);
