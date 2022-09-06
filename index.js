/*utilizei js apenas para o envio da mensagem*/
function enviarForm(){
    var mensagem;
    mensagem = document.getElementById('mensagem').value;
    var id;
    id = document.getElementById('nomeUser').value;

    if(mensagem.length > 0 && id.length> 0){
        
        alert('Olá' + ' ' + id + ' ' +'mensagem enviada com sucesso!')
    }else{
    
        alert("Preencha todos os campos antes de enviar!")
    }
}