var body = document.querySelector("body")
var singInButton = document.querySelector("#singIn")
var singUpButton = document.querySelector("#singUp")
const url = 'http://localhost:5016';

body.onload = function()
{
    body.className = "on-load"
}

singInButton.addEventListener("click", function()
{
    body.className = "sing-in"
});

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
})

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector("#register");
    const accessButton = document.querySelector("#access");

    if (registerButton){
        registerButton.addEventListener("click", formularioCadastrarUsuario);
    }

    if (accessButton){
        registerButton.addEventListener("click", formularioAcessar);
    }
});

const formularioCadastrarUsuario = async () => {
    const email  = document.querySelector("#email").value.trim();
    const password  = document.querySelector("#senha").value;
    const confirmedPassword  = document.querySelector("#confirmarSenha").value;

    if (email === ""){
        alert("Email obrigatório");
        return;
    }

    if (password === ""){
        alert("Senha obrigatório");
        return;
    }

    if (confirmedPassword === ""){
        alert("Confirmar senha obrigatório");
        return;
    }

    try{
        let dto = JSON.stringify({
            email,
            password,
            confirmedPassword
        });

        console.info('email', email);
        console.info('dto', dto);
        /*
        {
            "email": "user@teste.com",
            "password": "Maudar@123",
            "confirmedPassword": "Maudar@123"
        }
        */

        const response = await fetch(url + "/Singup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: dto,
        });

        if (!response.ok){
            alert('Erro ao cadastrar usuário');
            return;
        }

        alert('Sucesso ao cadastrar usuário');

        //redirecionar para tela principal do sistema
    } catch (error){
        alert('Erro ao cadastrar usuário');
        console.error(error.message);
    }
}

const formularioAcessar = async () => {
    const email  = document.querySelector("#email").value.trim();
    const password  = document.querySelector("#senha").value;

    if (email === ""){
        alert("Email obrigatório");
        return;
    }

    if (password === ""){
        alert("Senha obrigatório");
        return;
    }

    try{
        let dto = JSON.stringify({
            email,
            password,
            confirmedPassword
        });

        console.info('email', email);
        console.info('dto', dto);

        const response = await fetch(url + "/Singin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: dto,
        });

        if (!response.ok){
            alert('Erro ao acessar plataforma');
            return;
        }

        alert('Sucesso ao acessar plataforma');

        //redirecionar para tela principal do sistema
    } catch (error){
        alert('Erro ao acessar plataforma');
        console.error(error.message);
    }
}