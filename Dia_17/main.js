let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "!@#$%&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let novaSenha="";

sizePassword.innerHTML = sliderElement.ariaValueMax;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function gerarSenha() {

    let senha = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++)
    {
        senha += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide");

    password.innerHTML = senha;

}

function copiarSenha(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(senha);
}