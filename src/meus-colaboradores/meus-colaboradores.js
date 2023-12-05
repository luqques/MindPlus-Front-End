/* Adicionar Colaborador --------------------------------------------- */
function validateForm() {

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var contactInput = document.getElementById('contact');
  var addressInput = document.getElementById('address');
  var officeInput = document.getElementById('office');
  var companyInput = document.getElementById('company');
  var passwordInput = document.getElementById('password');

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var contactError = document.getElementById('contactError');
  var addressError = document.getElementById('addressError');

  var passwordError = document.getElementById('passwordError');

  if (!nameInput.checkValidity()) {
    nameError.textContent = 'Por favor, preencha este campo.';
  } else {
    nameError.textContent = '';
  }

  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
  } else {
    emailError.textContent = '';
  }

  if (!contactInput.checkValidity()) {
    contactError.textContent = 'Por favor, insira um contato.'
  } else {
    contactError.textContent = '';
  }

  if (!addressInput.checkValidity()) {
    addressError.textContent = 'Por favor, insira um endereço.'
  } else {
    addressError.textContent = '';
  }

  if (!officeInput.checkValidity()) {
    officeError.textContent = 'Por favor, insira um cargo.'
  } else {
    officeError.textContent = '';
  }

  if (!companyInput.checkValidity()) {
    companyError.textContent = 'Por favor, insira uma empresa.'
  } else {
    companyError.textContent = '';
  }

  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Por favor, insira uma senha.'
  } else {
    passwordError.textContent = '';
  }
}

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
