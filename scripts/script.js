let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@-_./";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";

    for(let cont = 0, size = charset.length; cont < sliderElement.value; cont++) {
        pass += charset.charAt(Math.floor(Math.random() * size))
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("SENHA COPIADA COM SUCESSO!")
    navigator.clipboard.writeText(novaSenha);

}