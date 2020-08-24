$(document).ready(function(){

    document.getElementById('form1').addEventListener('submit', function(evt){
        evt.preventDefault();
        document.getElementById('form1').window.location.href = "pedidos.html";
    })

    var divId = $("#Data"); // pega um elemento e adiciona na variavel 
    var dataAtual = new Date();
    var month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var mes = month[dataAtual.getMonth()];
    var mensagem = "Jundiaí, " + dataAtual.getDate() + " de " + mes + " de " + dataAtual.getFullYear()
    divId.text(mensagem);
});

function attvalor(){
    
    var numberOfChecked = $('input:checkbox:checked').length;
    var refrivalue= 0;
    var lanchevalue = 0;
    if($('input[id=bebida]:checked').val() == "dolly")
    refrivalue = 5;
        else if($('input[id=bebida]:checked').val() == "coquinha")
        refrivalue=7;
        else if($('input[id=bebida]:checked').val() == "pepsi")
		refrivalue=5;
		else if($('input[id=bebida]:checked').val() == "sasuke")
		refrivalue=5;
    if($('input[id=lanches]:checked').val() == "1")
    lanchevalue= 35;
        else if($('input[id=lanches]:checked').val() == "2")
        lanchevalue= 25;
        else if($('input[id=lanches]:checked').val() == "3")
        lanchevalue= 40;    
        
    console.log($('input[id=bebida]:checked').val());
    console.log($('input[id=lanches]:checked').val());
    var vf= $("#teste");
    var verFinal = (numberOfChecked*4) + refrivalue + lanchevalue;
    vf.html(verFinal);
    console.log(verFinal);
    
    localStorage.setItem("valor_final", verFinal);
}









