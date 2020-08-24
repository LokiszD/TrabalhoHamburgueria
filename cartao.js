$(document).ready(function(){ // ESPERA A Página carregar para executar o que tem dentro.
  
    var divId = $("#Data"); // pega um elemento e adiciona na variavel 
    var dataAtual = new Date();
    var month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var mes = month[dataAtual.getMonth()];
    var mensagem = "Jundiaí, " + dataAtual.getDate() + " de " + mes + " de " + dataAtual.getFullYear()
    divId.text(mensagem);
    document.getElementById("valor_final").append(localStorage.getItem("valor_final"));
    localStorage.clear();
})

function calculaTroco(){

    var valorCompra = parseFloat(localStorage.getItem("valor_final"));
    var valorPago = parseFloat($("#valorPago").val());
    var valorTroco = 0;


    if (valorPago == valorCompra){
        valorTroco = 0;
        $("#valorTroco").val(valorTroco);
        alert("Não gerou troco");

    }else if(valorPago > valorCompra){

        valorTroco = valorPago - valorCompra;
        $("#valorTroco").val(valorTroco);

    }else{
        alert("Não gerou troco (Valor pago menor que valor da compra)");
    }

    $("#valorCompra").val("");
    $("#valorPago").val("");
    $("#valorCompra").focus();
}


function validate(n){
    var n = n.toString().split(''),
        is_odd = n.length & 1;
    
    return !(n.map(function(el, i) {
      var val = (is_odd) ? ((i & 1) ? parseInt(el) * 2 : el) : (!(i & 1) ? parseInt(el) * 2 : el);
      return (val > 9) ? val - 9 : val;
    }).reduce(function(p, c) {
      return parseInt(p) + parseInt(c);
    }) % 10);
  }
  
  $('#val').click(function() {
    var cc = $('#cc');
    var ccWrapper = $('#cc-wrapper');
    var ccVal = cc.val();
    var isValid = true;
    
    ccVal = ccVal.replace(/[^0-9]/g, '');
    
    if (!(/^\d+$/.test(ccVal)) ||
       (ccVal.length !== 16 && ccVal.length !== 15))
    { // check length 15 or 16
      isValid = false; 
    }
    
    if (isValid) {
      isValid = validate(ccVal);
    }
    
    ccWrapper[0].className = '';
    
    if (isValid) {
      ccWrapper.addClass('pass');
    } else {
      ccWrapper.addClass('fail animated shake');
    }
    
    setTimeout(function() {
      ccWrapper.removeClass('animated shake');
    }, 500);
  });