<<<<<<< HEAD
=======


>>>>>>> javascript
let nome = document.getElementById('nome');
let email = window.document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let emailOk = false
let assuntoOk = false
let nomeOk = false
let mapa = document.querySelector('#mapa')

<<<<<<< HEAD
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <= 2) {

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
=======
function validaNome () { 
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <= 2 ) {
        alert('erro')
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else {
>>>>>>> javascript
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
<<<<<<< HEAD

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {

        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
=======
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == - 1) {
        alert('erro')
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
    else {
>>>>>>> javascript
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
<<<<<<< HEAD

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {

        txtAssunto.innerHTML = 'Tamanho muito grande'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {

=======
  
}
function validaAssunto() {
    let txtAssunto = documento.querySelector('#txtAssunto')

    if(assunto.value.length > 100) {
        alert('assunto muito grande')
        txtAssunto.innerHTML = 'Tamanho muito grande'
        txtAssunto.style.color = 'red'
    }else {
        txtAssunto.innerHTML = 'Tamanho ok'
        txtAssunto.style.color  = 'green'
>>>>>>> javascript
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
<<<<<<< HEAD

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o formulário antes de enviar')
    }
}

function mapaZoom() {
=======
function enviar () {
    if ( nomeOk == true && emailOk == true && assuntoOk == true ) {
    alert('Formulário enviado com sucesso')
} else {
    alert('Preencha o formulário antes de enviar')
}
}

function mapaZoom () {
>>>>>>> javascript
    mapa.style.width = '800px'
    mapa.style.height = '400px'
}

<<<<<<< HEAD
function mapaNormal() {
=======
function mapaNormal () {
>>>>>>> javascript
    mapa.style.width = '350px'
    mapa.style.height = '250px'
}