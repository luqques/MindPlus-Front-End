function editEmployee() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const business = document.getElementById('business').value;
    const adress = document.getElementById('adress').value;
    const contract = document.getElementById('contract').value;

    console.log(`E-mail: ${email}, Nome: ${name}, Cargo: ${position}, Contato: ${phone}, Empresa: ${business}, Endereço: ${adress}, Contrato: ${contract}`);
    document.getElementById('editForm').reset();

}




/*

teste pois a malu já esta trabalhando com os scripts 

*/



/*

const lista = [
    {
      imagem: "produto.jpg",
      nome: "Produto 3",
      preco: 185,
      parcelas: 12,
      valorParcela: 18,
    },
    {
      imagem: "produto.jpg",
      nome: "Produto 4",
      preco: 185,
      parcelas: 12,
      valorParcela: 18,
    },
  ];
  const produto1 = {
    imagem: "produto.jpg",
    nome: "Produto 1",
    preco: 185,
    parcelas: 12,
    valorParcela: 18,
  };
  
  const produto2 = {
    imagem: "produto2.png",
    nome: "Produto 2",
    preco: 195,
    parcelas: 12,
    valorParcela: 19,
  };
  
  lista.push(produto1);
  lista.push(produto2);
  
  function createElementProduto(produto) {
      const novoCard = $("#modelo").clone().removeAttr(`id`).removeClass('hidden');
      $('img', novoCard).attr(`src`, produto.imagem);
      $('h1', novoCard).html(produto.nome);
      $('.preco', novoCard).html(produto.preco);
      $('.parcelas', novoCard).html(produto.parcelas);
      $('.valor-parcela', novoCard).html(produto.valorParcela);
      $("#container").append($(novoCard));
  }
  
  for(let produto of lista) {
      createElementProduto(produto);
  }



  $(() => {
   
    $("#btn-add").click(() => {
        const values = {
            imagem: "produto2.png",
            nome: $("#nome")[0].value,
            preco: $("#preco")[0].value,
            parcelas: 10
        }
 
        if (!values.nome) {
            alert("Nome não informado!");
            $("#nome").addClass("invalid");
            return;
        }
        $("#nome").removeClass("invalid");
 
        if (!values.preco) {
            alert("Preco não informado");
            $("#preco").addClass("invalid");
            return;
        }
        $("#preco").removeClass("invalid");
       
        values.valorParcela = values.preco/values.parcelas;
 
        console.log(values);
        createElementProduto(values);
 
    });
})


*/