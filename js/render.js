const nomePaginaAtual = window.location.pathname.split("/").pop();

fetch('/novidades.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("novidadesContainer");

    if (!container) return;

    // Filtra as novidades, excluindo a atual
    const outrasNovidades = data.novidades.filter(n => !n.link.includes(nomePaginaAtual));

    outrasNovidades.forEach(novidade => {
      const div = document.createElement("div");
      div.className = "novidade";

      div.innerHTML = `
        <a href="../${novidade.link}">
          <img src="../${novidade.imagem}" alt="${novidade.alt}">
          <h4>${novidade.titulo}</h4>
          <p>${novidade.descricao}</p>
        </a>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => console.error("Erro ao carregar novidades:", error));
