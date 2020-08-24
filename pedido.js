$(document).ready(function(){ // ESPERA A Página carregar para executar o que tem dentro.
  
      var divId = $("#Data"); // pega um elemento e adiciona na variavel 
      var dataAtual = new Date();
      var month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      var mes = month[dataAtual.getMonth()];
      var mensagem = "Jundiaí, " + dataAtual.getDate() + " de " + mes + " de " + dataAtual.getFullYear()
      divId.text(mensagem);
      document.getElementById("valor_final").append(localStorage.getItem("valor_final"));
      
})

function calculaTroco(){

    var valorCompra = parseFloat(localStorage.getItem("valor_final"));
    var valorPago = parseFloat($("#valorPago").val());
    var valorTroco = 0;

    if(valorPago == valorCompra){
        
        $("#valorTroco").val(valorTroco);
        alert("Não gerou Troco");
    }
    else if(valorPago > valorCompra){
        valorTroco = valorPago - valorCompra;
        $("#valorTroco").val(valorTroco);
    }
    else{
        alert("Valor pago menor que o valor da compra");
    }

    $("#valorCompra").val("");
    $("#valorPago").val("");
    $("#valorCompra").focus();

    localStorage.clear();
}
