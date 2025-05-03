document.addEventListener('DOMContentLoaded', function() {

const dados = localStorage.getItem("cadastro");

if (!dados) {
   
    window.location.href = "index.html";
} else {
    const cadastro = JSON.parse(dados);
    console.log("Dados do cadastro:", cadastro);
    document.getElementById("nomeUsuario").textContent = cadastro.nomeCompleto;
}
});