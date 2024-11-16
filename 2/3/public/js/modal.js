const closeModal = document.querySelector('.close__modal');
const button = document.querySelector('.cancel');
const myModal = document.querySelector('.annoying__modal');
const accordionsModal = document.querySelector('.FAQS');

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

// console.log(typeof localStorage.getItem('modalWasOpened'));

function openModal() {
    myModal.classList.toggle('active');
}

let observer;

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && localStorage.getItem('modalWasOpened') != "true") {
            openModal();
        }
        
        prevRatio = entry.intersectRatio;
    });
}

observer = new IntersectionObserver(handleIntersect, options);

observer.observe(accordionsModal);
let time = 3;

function changeCounterText() {
    // Находим элемент с классом 'counter'
    const counterElement = Array.from(button.children).find(child => child.className === 'counter');

    // Если элемент с классом 'counter' не найден, создаем его
    if (!counterElement) {
        const newCounter = document.createElement('span');
        newCounter.className = 'counter';
        newCounter.textContent = time;
        button.appendChild(newCounter);
    } else {
        // Обновляем текст, если элемент найден
        if (time > 0) {
            counterElement.textContent = time;
        } else {
            counterElement.remove();
        }
    }

    // Добавляем обработчик события для закрытия модального окна

    // Уменьшаем время
    time--;
}

let timer = setInterval(() => {
    if (time >= 0) {
        changeCounterText();
    } else {
        closeModal.addEventListener('click', () => {
            if (time <= 0) {
                myModal.classList.toggle('active');
            }
        });
        clearInterval(timer);
        localStorage.setItem('modalWasOpened', true);
    }
}, 1000);
