const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener(`click`);

function openModal() {
    let modal = document.getElementById('modal');
    let overlay = document.querySelector('.modal-overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('modal');
    let overlay = document.querySelector('.modal-overlay');

    modal.style.display = 'none';
    overlay.style.display = 'none';
}