const closeModal = document.querySelector('.close__modal');
const button = document.querySelector('.cancel');
const myModal = document.querySelector('.annoying__modal');
const accordionsModal = document.querySelector('.FAQS');

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}


function openModal() {
    myModal.classList.toggle('active');
}

closeModal.addEventListener('click', () => {
    myModal.classList.toggle('active');
});

let observer;

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            openModal();
        }
        
        prevRatio = entry.intersectRatio;
    });
}

observer = new IntersectionObserver(handleIntersect, options);

observer.observe(accordionsModal);
let time = 10;
function changeCounterText() {
    for (children of Array.from(button.children)) {
        if (child.className === 'counter') {
            button.innerHTML = `<span class="counter">${time}</span>`;
            time--;
            return 0;
        }
    };
    button.innerHTML += `<span class="counter">${time}</span>`;
    time--;
}

let timer = setInterval(() => {
    if (time > 0) {
        changeCounterText();
    }
}, 1000);
