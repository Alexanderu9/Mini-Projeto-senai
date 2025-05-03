
const registros = [
    { usuario: "Alexander", tipo: "Ipês", quantidade: 120 },
    { usuario: "Maria", tipo: "Angicos", quantidade: 300 },
    { usuario: "João", tipo: "Ipês", quantidade: 75 },
    { usuario: "Ana", tipo: "Aroeiras", quantidade: 40 },
    { usuario: "Alexander", tipo: "Jequitibás", quantidade: 50 },
    { usuario: "Lucas", tipo: "Peroba do campo", quantidade: 20 }
  ];
  
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = document.getElementById("usuario").value.trim().toLowerCase();
    const tipo = document.getElementById("arboles").value;
  
    const resultadosFiltrados = registros.filter(registro => {
      const nomeMatch = nome === "" || registro.usuario.toLowerCase().includes(nome);
      const tipoMatch = tipo === "" || registro.tipo === tipo;
      return nomeMatch && tipoMatch;
    });
  
    exibirResultados(resultadosFiltrados);
  });
  
  function exibirResultados(resultados) {
    const container = document.getElementById("resultados");
    container.innerHTML = "";
  
    if (resultados.length === 0) {
      container.innerHTML = "<p>Nenhum registro encontrado.</p>";
      return;
    }
  
    resultados.forEach(registro => {
      const item = document.createElement("div");
      item.classList.add("resultado-item");
      item.textContent = `${registro.usuario} plantou ${registro.quantidade} árvore(s) do tipo ${registro.tipo}.`;
      container.appendChild(item);
    });
  }
  