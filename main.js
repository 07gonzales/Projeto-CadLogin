// validação de preenchimento de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    

    //verifica se os campos foram preenchidos

    if(!loginEmail || !loginSenha){
        alert("Favor, preencher todos os campos de acesso.");
    }else{
        
    }
}