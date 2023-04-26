let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");
let divMapa = document.querySelector("#div-mapa");

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';


function validarNome(){
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
      /* InnerHTML add um valor a um elemento 
       no caso, add a DIV txtNome um valor de texto, isso por meio da variavel let txt*/
      txtNome.innerHTML = "Nome Inválido!";
      txtNome.style.color = 'red';
    }
    else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color ='green';
        nomeOk = true;
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red";
    }
    else{
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green";
        emailOk = true;
    }
    
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 100 ) {
        txtAssunto.innerHTML = "O assunto deve ter no máximo 100 caracteres!"
        txtAssunto.style.color = 'red';
        /*
        como o 'Assunto' já começa com menos que 100 caracteres, o código já pula para o else e o display fica 'none' -
        então add no if tbm uma configuração para que cair nele,  display fique block e msg apareça.
        */
        txtAssunto.style.display = 'block';
        assuntoOk = false;
    }
    else{
        /*
        display é como um elemento aparece na minha página.
        quando add 'none' queremos que não apareça.
        */        
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar(){
    if (nomeOk == true && assuntoOk == true && emailOk == true) {
        alert("Formulário enviado!")
    }
    else{
        alert("Formulário não foi enviado! Por favor, revise se os campos foram preenchidos corretamente.")
    }
}

function mapaNormal(){
    mapa.style.width = '400px';
    mapa.style.height = '375px';
    divMapa.style.width = '400px'
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
    divMapa.style.width = '800px';
}

