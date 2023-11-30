$(() => {

  $(".btn-entrar").click(() => {
    const values = {
      email: $("#email")[0].value,
      senha: $("#senha")[0].value,
      materLogado: $("#checkbox-keep-logged")[0].value
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

    window.location.href = "../homepage/homepage.html";
  });
});