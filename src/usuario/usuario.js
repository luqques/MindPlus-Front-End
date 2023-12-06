$(() => {
  function salvarInformacoes() {
    let dadosUsuario = {
      email: $("#email")[0].value,
      contato: $("#contato")[0].value,
      endereco: $("#endereco")[0].value,
      cargo: $("#cargo")[0].value,
      modeloContratacao: $("#modeloContratacao")[0].value,
      minhaEmpresa: $("#minhaEmpresa")[0].value,
    };
    if (!dadosUsuario.email) {
      alert("E-mail não informado!");
      $("#email").addClass("invalid");
      return;
    }
    $("#email").removeClass("invalid");

    if (!dadosUsuario.contato) {
      alert("Contato não informado");
      $("#contato").addClass("invalid");
      return;
    }
    $("#contato").removeClass("invalid");

    if (!dadosUsuario.endereco) {
      alert("Endereco não informado");
      $("#endereco").addClass("invalid");
      return;
    }
    $("#endereco").removeClass("invalid");

    if (!dadosUsuario.cargo) {
      alert("Cargo não informado");
      $("#cargo").addClass("invalid");
      return;
    }
    $("#cargo").removeClass("invalid");

    if (!dadosUsuario.modeloContratacao) {
      alert("Modelo contratacao não informado");
      $("#contamodeloContratacaoto").addClass("invalid");
      return;
    }
    $("#modeloContratacao").removeClass("invalid");

    if (!dadosUsuario.minhaEmpresa) {
      alert("Minha empresa não informada");
      $("#contamodeloContratacaoto").addClass("invalid");
      return;
    }
    $("#minhaEmpresa").removeClass("invalid");

    console.log("Dados: ", dadosUsuario);
  }

  $("#button-save").on("click", salvarInformacoes);
});
