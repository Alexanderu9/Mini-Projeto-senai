const usuario = {
    nome: "Alexander Urdaneta",
    email: "alex@Senai.com",
    bio: "Amante da natureza e reflorestador ativo.",
    tipoArvore: "Ipes",
    totalPlantadas: 1500
};

function obterAvatar(total) {
    let nivel = "plantada";

    if (total >= 1500) {
        nivel = "madura";
    } else if (total >= 700) {
        nivel = "jovem";
    } else if (total >= 300) {
        nivel = "broto";
    }

    return `/assets/img/1-${nivel}.png`;
}

function carregarPerfil() {
    document.getElementById("nomeUsuario").textContent = usuario.nome;
    document.getElementById("emailUsuario").textContent = usuario.email;
    document.getElementById("totalArvores").textContent = usuario.totalPlantadas;
    document.getElementById("bioInput").value = usuario.bio;

    const avatarURL = obterAvatar(usuario.totalPlantadas);
    document.getElementById("avatarImagem").src = avatarURL;
}

document.getElementById("salvarBio").addEventListener("click", () => {
    const novaBio = document.getElementById("bioInput").value.trim();

    if (novaBio.length === 0) {
        alert("A bio não pode estar vazia.");
        return;
    }

    usuario.bio = novaBio;
    document.getElementById("confirmacaoBio").textContent = "Bio atualizada com sucesso!";
});

carregarPerfil();
