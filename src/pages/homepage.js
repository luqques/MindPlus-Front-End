let openModal = document.querySelectorAll("#open-modal");
for (let open of openModal) {
  open.addEventListener(`click`, showModal);
}

function showModal() {
  let modal = document.querySelector("#menu-lateral");
  modal.classList.add(`menu-lateral-ativo`);
}

function closeModal() {
  let modal = document.querySelector("#menu-lateral");
  modal.classList.remove(`menu-lateral-ativo`);
}