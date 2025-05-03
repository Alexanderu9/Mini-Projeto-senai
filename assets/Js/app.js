const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const error = document.getElementById("error");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagem3 = document.getElementById("imagen3");

document.querySelectorAll('.imagen').forEach(img => {
    img.addEventListener('click', function () {
        document.querySelectorAll('.imagen').forEach(i => i.classList.remove('selecionado'));
        this.classList.add('selecionado');
        document.getElementById('selecionado').value = this.dataset.value;
    });
});


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const selectorImg = document.getElementById("selecionado").value;
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const password = document.getElementById("password").value;
    const passwordNew = document.getElementById("new-password").value;

    const cadastro = {
        usuario: usuario,
        selectorImg: selectorImg,
        nomeCompleto: nomeCompleto,
        email: email,
        idade: idade,
    };

    localStorage.setItem("cadastro", JSON.stringify(cadastro));
    const dados = localStorage.getItem("cadastro");

    if(dados) {
        const cadastro = JSON.parse(dados);
        console.log(cadastro);
    }

    if (password !== passwordNew) {
        error.textContent = "As senhas devem ser iguais";
    } else if (usuario !== "" && selectorImg == "pau-brasil") {
        localStorage.setItem(usuario.toString(), selectorImg); 
        window.location.href = "PauBrasil.html";
    } else if (usuario !== "" && selectorImg == "castanheira") {
        localStorage.setItem(usuario.toString(), selectorImg); 
        window.location.href = "Castanheira.html";
    } else if (usuario !== "" && selectorImg == "peroba-rosa") {
        localStorage.setItem(usuario.toString(), selectorImg); 
        window.location.href = "PerobaRosa.html";
    } else {
        error.textContent = "Usuário ou senha incorretos";
    };

    
});
