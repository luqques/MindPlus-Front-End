var loggedText = document.getElementById('keep-logged-in');
var loggedCheckbox = document.getElementById('checkbox-keep-logged');
loggedText.addEventListener('click', function () {
  loggedCheckbox.checked = !loggedCheckbox.checked;
});
loggedCheckbox.addEventListener('click', function () {
  loggedCheckbox.checked = !loggedCheckbox.checked;
});

$(() => {

  $(".btn-entrar").click(() => {
    const values = {
      email: $("#email")[0].value,
      senha: $("#senha")[0].value,
      manterLogado: $("#checkbox-keep-logged")[0].checked
    }

    if (!values.email) {
      alert("E-mail não informado!");
      $("#email").addClass("invalid");
      return;
    }
    $("#email").removeClass("invalid");

    if (!values.senha) {
      alert("Senha não informada!");
      $("#senha").addClass("invalid");
      return;
    }
    $("#senha").removeClass("invalid");

    console.log(values);

    // A chamada para a página inicial foi retirada para que o console.log com o JSON no inspecionar da página não seja apagado.
    // window.location.href = "../homepage/homepage.html";
  });
});
