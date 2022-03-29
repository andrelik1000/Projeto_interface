var formEntrar =document.querySelector('#signin')
var formCadastrar =document.querySelector('#signup')
var btnCor =document.querySelector('.btnCor')

document.querySelector('#btnSignIn').addEventListener('click', () => {
    formEntrar.style.left = "25px",
    formCadastrar.style.left = "450px",
    btnCor.style.left = "0px"
})

document.querySelector('#btnSignUp').addEventListener('click', () => {
    formEntrar.style.left = "-450px",
    formCadastrar.style.left = "25px",
    btnCor.style.left = "110px"
})

/* LOGAR */

function logar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');  
    headers.append('GET', 'POST', 'OPTIONS');

    fetch("https://elany-cors-proxy.herokuapp.com/https://projeto-interface-api.herokuapp.com/", {
        method: 'GET',
        headers: headers,
    }).then(response => response.json())
    .then(json => {
        alert(json.message)
    })

}