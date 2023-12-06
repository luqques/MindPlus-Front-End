/* Adicionar Colaborador - MALU --------------------------------------------- */
function addEmployee() {

  let nameInput = document.getElementById('nameAdd');
  let emailInput = document.getElementById('emailAdd');
  let contactInput = document.getElementById('contactAdd');
  let addressInput = document.getElementById('addressAdd');
  let officeInput = document.getElementById('officeAdd');
  let companyInput = document.getElementById('companyAdd');
  /*let passwordInput = document.getElementById('password');*/

  let nameError = document.getElementById('nameErrorAdd');
  let emailError = document.getElementById('emailErrorAdd');
  let contactError = document.getElementById('contactErrorAdd');
  let addressError = document.getElementById('addressErrorAdd');
  let officeError = document.getElementById('officeErrorAdd');
  let companyError = document.getElementById('companyErrorAdd');
 /* let passwordError = document.getElementById('passwordError');*/

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
    contactError.textContent = 'Por favor, insira um contato.';
  } else {
    contactError.textContent = '';
  }

  if (!addressInput.checkValidity()) {
    addressError.textContent = 'Por favor, insira um endereço.';
  } else {
    addressError.textContent = '';
  }

  if (!officeInput.checkValidity()) {
    officeError.textContent = 'Por favor, insira um cargo.';
  } else {
    officeError.textContent = '';
  }

  if (!companyInput.checkValidity()) {
    companyError.textContent = 'Por favor, insira uma empresa.';
  } else {
    companyError.textContent = '';
  }
/*
  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Por favor, insira uma senha.';
    isValid = false
  } else {
    passwordError.textContent = '';
  }
  */
}


/* Alterar Colaborador - ISA --------------------------------------------- */

function editEmployee() {
  
  let emailInput = document.getElementById('emailAlt');
  let nameInput = document.getElementById('nameAlt');
  let contactInput = document.getElementById('contactAlt');
  let addressInput = document.getElementById('addressAlt');
  let officeInput = document.getElementById('officeAlt');
  let companyInput = document.getElementById('companyAlt');

  let emailError = document.getElementById('emailErrorAlt');
  let nameError = document.getElementById('nameErrorAlt');
  let contactError = document.getElementById('contactErrorAlt');
  let addressError = document.getElementById('addressErrorAlt');
  let officeError = document.getElementById('officeErrorAlt');
  let companyError = document.getElementById('companyErrorAlt');

  if (emailInput.text == null || nameInput.text.lenght < 5) {
    emailError.textContent = 'Insira um endereço de e-mail válido.';
  } else {
    emailError.textContent = '';
  }

  if (nameInput.text == null || nameInput.text.lenght < 5) {
    nameError.textContent = 'Preencha este campo.';
  } else {
    nameError.textContent = '';
  }

  if (contactInput.text == null || nameInput.text.lenght < 5) {
    contactError.textContent = 'Insira um contato.';
  } else {
    contactError.textContent = '';
  }

  if (addressInput.text == null || nameInput.text.lenght < 5) {
    addressError.textContent = 'Insira um endereço.';
  } else {
    addressError.textContent = '';
  }

  if (officeInput.text == null || nameInput.text.lenght < 5) {
    officeError.textContent = 'Insira um cargo.';
  } else {
    officeError.textContent = '';
  }

  if (companyInput.text == null || nameInput.text.lenght < 5) {
    companyError.textContent = 'Insira uma empresa.';
  } else {
    companyError.textContent = '';
  }
}


/* Remover Colaborador - MALU ------------------------------------------------ */

function deleteEmployee() {

  let email = document.getElementById('email').value;
  let confirmation = document.getElementById('confirmation').checked;

  if (email && confirmation) {
    alert("Funcionário deletado com sucesso!");
  } else {
    alert("Por favor, preencha o E-mail e confirme a exclusão.");
  }
}