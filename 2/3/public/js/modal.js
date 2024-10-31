const openModal = document.querySelector('button.delete__profile');
const closeModal = document.querySelector('.close__modal');
const cancelDelete = document.querySelector('.cancel');
const deleteProfile = document.querySelector('.delete');
const myModal = document.querySelector('.my-modal');
const modalWhenActive = document.querySelector('.modalWhenActive');

const durovProfile = {
    userId: "5",
    token: "e#J$#IFE3u423ef"
};


openModal.addEventListener('click', () => {
    myModal.classList.toggle('active');
    modalWhenActive.classList.toggle('active');
});
closeModal.addEventListener('click', () => {
    myModal.classList.toggle('active');
    modalWhenActive.classList.toggle('active');
});
cancelDelete.addEventListener('click', () => {
    myModal.classList.toggle('active');
    modalWhenActive.classList.toggle('active');
});
modalWhenActive.addEventListener('click', () => {
    myModal.classList.toggle('active');
    modalWhenActive.classList.toggle('active');
});
deleteProfile.addEventListener('click', () => {
    myModal.classList.toggle('active');
    modalWhenActive.classList.toggle('active');
    fdeleteProfile(event, durovProfile.userId, durovProfile.token);
});


async function fdeleteProfile(event, userId, token) {
    event.preventDefault();

    console.log(userId)

    try {
        let response = fetch(`https://fakestoreapi.com/products/${userId}`, {
            method: "DELETE"
        });
        // const deletedUsed = await response.json();

        alert("Your profile succesfull deleted!");

        location.reload();
    } catch {

    }
}

