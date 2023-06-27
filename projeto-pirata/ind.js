const submitBtnn = document.querySelector('.btn');

function logar(){
    var login = document.getElementById('login_field').value;
    var senha = document.getElementById('password').value;

    //aqui estou passando o nome é a senha do usuario se for este ele aceita se não da erro, usuario criado manualmete
    if( login == "teste" && senha == "projeto"){
        console.log('Bem-Vindo');
        location.href = "piraflexIn.html"; // location.href ele vai carrega o arquivo que estiver ai dentro
    } else{
        alert('Usuario ou senha não encontrados');
        document.getElementById('login_field').style.background = 'rgb(255 0 0 / 39%)';
        document.getElementById('input').style.color = 'white';

        document.getElementById('password').style.background = 'rgb(255 0 0 / 39%)';
        document.getElementById('inputt').style.color = 'white';
        document.getElementById('on').style.color = 'white';
        document.getElementById('of').style.color = 'white';
    }
}

function mostrarSenha(){
    var tipo = document.getElementById('password');
    if(tipo.type == "password"){
        tipo.type = "text";
    }
}

function ocultarSenha(){
    var de = document.getElementById('password');
    if(de.type == "text"){
        de.type = "password";
    }
}

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
     
        submitBtnn.click();
      
    }
})
