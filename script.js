var text = document.getElementById('text');
var send = document.getElementById('send');
var retorno = document.getElementById('retorno');

send.addEventListener('click', ()=>{
    if (text.value){
        retorno.innerHTML += `<b>Seu nome é ${text.value}</a></b><br>`
    }else{
        retorno.innerHTML += `<b>preecnha o formulario</b><br>`
    }
})