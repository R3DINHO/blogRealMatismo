fetch('/novidades.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#noticias-container'); // O container onde as notícias serão inseridas
    const modeloNovidade = document.querySelector(".novidades-card"); // O modelo que já existe no HTML

    data.novidades.forEach(novidade => {
      // Criando o elemento <a> e atribuindo o href
      const linkElement = document.createElement("a");
      linkElement.href = novidade.link;
      linkElement.classList.add("linkNovidade");

      // Clonando o modelo do card
      const novidadeElement = modeloNovidade.cloneNode(true);
      novidadeElement.innerHTML = `
        <img src="${novidade.imagem}" alt="${novidade.alt}">
        <h3 class="titulo-noticia">${novidade.titulo}</h3>
        <p class="desc-noticia">${novidade.descricao}</p>
      `;

      // Adicionando o card dentro do <a>
      linkElement.appendChild(novidadeElement);
      container.appendChild(linkElement);
    });

    // Remove o modelo original para evitar duplicação
    modeloNovidade.parentElement.remove();
  })
  .catch(error => console.error('Erro ao carregar as novidades:', error));
