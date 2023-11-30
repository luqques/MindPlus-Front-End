$(() => {
    
    $("#button-save").click(() => {
        const values = {
            email: $("#email")[0].value,
            contato: $("#contato")[0].value,
            endereco: 10,
            cargo: $("#cargo")[0].value,
            contratacao: $("#contratacao")[0].value,
            empresa: $("#empresa")[0].value
        }

        if (!values.email) {
            alert("email não informado!");
            $("#email").addClass("invalid");
            return;
        }
        $("#email").removeClass("invalid");

        if (!values.contato) {
            alert("contato não informado");
            $("#contato").addClass("invalid");
            return;
        }
        $("#contato").removeClass("invalid");
        
        console.log(values);
    });
})