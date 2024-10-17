const btn__modal = document.querySelector('.button.burger-menu');
const header = document.querySelector('.header');
const burger__modal = document.querySelector('.modal__burger');

burger__modal.style.height = `${window.innerHeight - parseFloat(getComputedStyle(header).height)}px`;
burger__modal.style.top = `-${parseFloat(getComputedStyle(header).marginBottom)}px`

btn__modal.addEventListener('click', () => {
    btn__modal.classList.toggle('active');
    burger__modal.classList.toggle('active');
    // document.body.style.overflow = 'hidden';
});

console.log(parseFloat(getComputedStyle(header).marginBottom));