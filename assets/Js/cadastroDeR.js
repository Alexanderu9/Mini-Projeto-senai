const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const error = document.getElementById("error");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
  const quantidades = document.getElementById("quantidades").value;
  const arboles = document.getElementById("arboles").value;

  const cadastro = {
    usuario: usuario,
    quantidades: quantidades,
    arboles: arboles,
  };

  localStorage.setItem("cadastro", JSON.stringify(cadastro));
  const dados = localStorage.getItem("cadastro");

  if(dados) {
      const cadastro = JSON.parse(dados);
      console.log(cadastro);
  }

  alert("Cadastro realizado com sucesso!");
;
});