const usuarios = [
    { nome: "Alexander", avatar: "/assets/img/1-madura.png", total: 1500 },
    { nome: "Maria Silva", avatar: "/assets/img/1-jovem.png", total: 900 },
    { nome: "João Pedro", avatar: "/assets/img/1-broto.png", total: 450 },
    { nome: "Luciana", avatar: "/assets/img/1-plantada.png", total: 200 },
    { nome: "Carlos Mendes", avatar: "/asset/imgs/1-jovem.png", total: 800 },
    { nome: "Ana Costa", avatar: "/assets/img/1-madura.png", total: 1600 }
  ];
  
const top3 = usuarios.sort((a, b) => b.total - a.total).slice(0, 3);

  const container = document.getElementById("containerDestaques");
  
  top3.forEach(usuario => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${usuario.avatar}" alt="Avatar de ${usuario.nome}">
      <h3>${usuario.nome}</h3>
    `;
  
    container.appendChild(card);
  });
  