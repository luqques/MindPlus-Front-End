/* Remover Colaborador ------------------------------------------------ */

function deleteEmployee() {
  var email = document.getElementById('email').value;
  var confirmation = document.getElementById('confirmation').checked;

  if (email && confirmation) {
    alert("Funcionário deletado com sucesso!");
  } else {
    alert("Por favor, preencha o e-mail e confirme a exclusão.");
  }
}

/* ------------------------------------------------------------------- */
