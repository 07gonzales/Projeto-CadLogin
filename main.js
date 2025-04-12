// validação de preenchimento de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    
    //verifica se os campos foram preenchidos

    if(!loginEmail || !loginSenha){
        alert("Favor, preencher todos os campos de acesso.");
    } else{
        window.location.href='cadastro.html';
    }
}

// Declara array para o projeto

var dadosLista = [];

//função para armazenar nomes em array

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    

    if(nomeUser){
        dadosLista.push(nomeUser);
        // console.log(dadosLista);

        document.getElementById('nomeUser').value = "";
        
    }else {
        alert("Favor, preencher o nome.");
    }
}