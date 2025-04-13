// Pega o nome do arquivo HTML atual (ex: "lancamentoCamisas.html")
const nomePagina = window.location.pathname.split("/").pop();

// Busca os dados do JSON
fetch('/novidades.json')
  .then(response => response.json())
  .then(data => {

    
    // Encontra a notícia correspondente à página
    const noticia = data.novidades.find(n => n.link.includes(nomePagina));

    if (noticia) {
      // Preenche o título principal (h2)
      const tituloEl = document.querySelector("article header h2");
      if (tituloEl) tituloEl.textContent = noticia.titulo;

      // Preenche o subtítulo (h3)
      const subTituloEl = document.getElementById("subTitle");
      if (subTituloEl) subTituloEl.textContent = noticia.descricao;

      // Preenche a imagem principal e o alt
      const imgEl = document.getElementById("fotoTime");
      if (imgEl) {
        imgEl.src = "../" + noticia.imagem;
        imgEl.alt = noticia.alt;
      }

      const dataEl = document.querySelector(".data");
      if(dataEl) {
        dataEl.textContent = `${noticia.data}`
      }

      const captionEL = document.querySelector(".mainCaption")
      if(captionEL){
        captionEL.textContent = `${noticia.caption}`
      }
    } else {
      console.warn("Notícia não encontrada no JSON para esta página.");
    }
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));


  fetch('/novidades.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#noticias-container');
    const modeloNovidade = document.querySelector(".novidades-card");

    let nomePaginaAtual = window.location.pathname.split("/").pop();
    if (nomePaginaAtual === "") nomePaginaAtual = "index.html";

    data.novidades.forEach(novidade => {
      // Pula se for a página atual OU se for a novidade de boas-vindas
      if (
        novidade.link.includes(nomePaginaAtual) ||
        novidade.link === "index.html"
      ) return;

      const linkElement = document.createElement("a");
      linkElement.href = `materias/${novidade.link}`;
      linkElement.classList.add("linkNovidade");

      const novidadeElement = modeloNovidade.cloneNode(true);
      novidadeElement.innerHTML = `
        <img src="../${novidade.imagem}" alt="${novidade.alt}">
        <h3 class="titulo-noticia">${novidade.titulo}</h3>
        <p class="desc-noticia">${novidade.descricao}</p>
        <br>
        <p class="dataHoraP">${novidade.data}</p>
      `;

      linkElement.appendChild(novidadeElement);
      container.appendChild(linkElement);
    });

    modeloNovidade.parentElement.remove();
  })
  .catch(error => console.error('Erro ao carregar as novidades:', error));

