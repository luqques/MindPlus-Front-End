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

        console.log("Dados: ", dadosUsuario);
   
    }

    $("#button-save").on("click", salvarInformacoes);

});
