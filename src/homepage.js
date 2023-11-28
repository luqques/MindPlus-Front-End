let openMenuLateral = document.querySelectorAll("#open-menu-lateral");
for (let open of openMenuLateral) {
  open.addEventListener(`click`, showMenuLateral);
}

function showMenuLateral() {
  let menuLateral = document.querySelector("#menu-lateral");
  menuLateral.classList.add(`menu-lateral-ativo`);
}

let closeMenuLateral = document.querySelectorAll("#close-menu-lateral");
for (let close of closeMenuLateral) {
  close.addEventListener(`click`, hiddenMenuLateral)
}

function hiddenMenuLateral() {
  let menuLateral = document.querySelector("#menu-lateral");
  menuLateral.classList.remove(`menu-lateral-ativo`);
}
