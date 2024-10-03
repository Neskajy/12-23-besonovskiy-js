const modalButton = document.getElementById('#openModal');
const modal = document.getElementById('#myModal');

document.addEventListener('DOMContentLoaded', () => {
    modalButton.addEventListener('click', () => {
        modal.style.display = 'block';

        document.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        })
    });
});