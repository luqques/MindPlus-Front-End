
var loggedText = document.getElementById('keep-logged-in');
var loggedCheckbox = document.getElementById('checkbox-keep-logged');
loggedText.addEventListener('click', function() {
    loggedCheckbox.checked = !loggedCheckbox.checked;
});
loggedCheckbox.addEventListener('click', function() {
    loggedCheckbox.checked = !loggedCheckbox.checked;
});

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener('click', () => {
  const email = document.querySelector("#email");
  const senha = document.querySelector("#senha");

  if (!email.value) {
    email.classList.add('invalid');
  } else {
    email.classList.remove('invalid');
  }

  if (!senha.value) {
    senha.classList.add('invalid');
  } else {
    senha.classList.remove('invalid');
  }
});