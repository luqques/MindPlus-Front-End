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
  
  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Por favor, insira uma senha.';
    isValid = false
  } else {
    passwordError.textContent = '';
  }

}


/* Alterar Colaborador - ISA --------------------------------------------- */

function editEmployee() {
  
  let emailInput = document.getElementById('emailAlt').value;
  let nameInput = document.getElementById('nameAlt').value;
  let contactInput = document.getElementById('contactAlt').value;
  let addressInput = document.getElementById('addressAlt').value;
  let officeInput = document.getElementById('officeAlt').value;
  let companyInput = document.getElementById('companyAlt').value;
  let contractSelect = document.getElementById('NMC').value;
  console.log(contractSelect)

  let emailError = document.getElementById('emailErrorAlt');
  let nameError = document.getElementById('nameErrorAlt');
  let contactError = document.getElementById('contactErrorAlt');
  let addressError = document.getElementById('addressErrorAlt');
  let officeError = document.getElementById('officeErrorAlt');
  let companyError = document.getElementById('companyErrorAlt');
  let contractError = document.getElementById('NMCError');

  if (emailInput == '' || emailInput.length < 5) {
    emailError.textContent = 'Insira um endereço de e-mail válido.';
  } else {
    emailError.textContent = '';
  }

  if (nameInput == '') {
    nameError.textContent = 'Preencha este campo.';
  } else if ( nameInput.length < 5) {
    nameError.textContent = 'O nome é inválido.';
  } else if (containsNumbers(nameInput)) {
    nameError.textContent = 'O nome não pode conter números.';
  } else {
    nameError.textContent = '';
  }

  if (contactInput == '') {
    contactError.textContent = 'Insira um contato.';
  } else if (contactInput.length < 8) {
    contactError.textContent = 'O nº de telefone é inválido.';
  } else if (containsLetters(contactInput)) {
    contactError.textContent = 'O nº de telefone não pode conter letras.';
  } else {
    contactError.textContent = '';
  }

  if (addressInput == '' || addressInput.length < 5) {
    addressError.textContent = 'Insira um endereço.';
  } else {
    addressError.textContent = '';
  }

  if (officeInput == '' || officeInput.length < 5) {
    officeError.textContent = 'Insira um cargo.';
  } else if (containsNumbers(officeInput)) {
    officeError.textContent = 'O cargo não pode conter números.';
  } else {
    officeError.textContent = '';
  }

  if (companyInput == '') {
    companyError.textContent = 'Insira uma empresa.';
  } else {
    companyError.textContent = '';
  }

  if (contractSelect == 'Selecione uma opção') {
    NMCError.textContent = 'Selecione uma opção válida.';
  } else {
    NMCError.textContent = '';
  }
}

// Verifica se tem números
function containsNumbers(input) {
  return /\d/.test(input);
}

// Verifica se tem letras
function containsLetters(input) {
  return /[a-zA-Z]/.test(input);
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
