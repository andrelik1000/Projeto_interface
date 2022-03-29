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

async function logar(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;

    if(!validate(email, password)) return alert("Preencha todos os campos!");
    sendLoginRequest({ email, password });
}

function sendLoginRequest(body) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');  
    headers.append('GET', 'POST', 'OPTIONS');
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }
    
    fetch("https://elany-cors-proxy.herokuapp.com/https://projeto-interface-api.herokuapp.com/login", options)
    .then(response => response.json()).then(Jres => {
        //Here you can work with the JSON parsed response
        if(Jres.statusCode && (Jres.statusCode === 400 || Jres.statusCode === 401)){
            return alert("Email ou senha inválida!")
        }
    });
}

function validate(email, password){
    return email.length > 0 && password.length > 0
}

function showPassword() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
