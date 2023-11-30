$(document).ready(function() {

    // Função para sallet informações
    function salletInformacoes() {
        // Recuperar os valores dos campos
        let email = $("#email input").val();
        let contato = $("#contato input").val();
        let endereco = $("#endereço input").val();
        let cargo = $("#cargo input").val();
        let modeloContratacao = $("#modelo-de-contratação input").val();
        let minhaEmpresa = $("#minha-empresa input").val();

        // Aqui você pode enviar os dados para o servidor ou fazer o que for necessário com eles
        // Por enquanto, apenas exibindo no console para demonstração
        console.log("Email: " + email);
        console.log("Contato: " + contato);
        console.log("Endereço: " + endereco);
        console.log("Cargo: " + cargo);
        console.log("Modelo de Contratação: " + modeloContratacao);
        console.log("Minha Empresa: " + minhaEmpresa);

        // Adicione aqui a lógica para enviar os dados para o servidor ou armazená-los localmente.
    }

    // Associar a função ao clique do botão sallet
    $("#button-save").on("click", salletInformacoes);

    // Outras funções (cancelarAcao(), excluirsuario()) podem ser adicionadas aqui ou em outros lugares do seu script, conforme necessário.

});
