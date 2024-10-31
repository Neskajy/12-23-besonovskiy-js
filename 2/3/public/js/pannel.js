const retractAbleELems = document.querySelectorAll('.retractable');
const pannel = document.querySelector('.pannel');

pannel.addEventListener('mouseover', () => {
    retractAbleELems.forEach((elem) => {
        elem.classList.toggle('active');
    });
});
pannel.addEventListener('mouseout', () => {
    retractAbleELems.forEach((elem) => {
        elem.classList.toggle('active');
    });
});