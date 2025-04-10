function modoEscuro() {
    let modoEscuroDiv = document.querySelector(".modoEscuro-container");
    let modoClaroDiv = document.querySelector(".modoClaro-container");

    modoEscuroDiv.classList.remove("mostrando"); 
    modoEscuroDiv.classList.add("naoMostrando");
    modoClaroDiv.classList.remove("naoMostrando");
    modoClaroDiv.classList.add("mostrando");

    let body = document.body;
    let corpoArtigoImg = document.querySelector(".corpo-artigo img");
    let novidadesImgs = document.querySelectorAll(".novidades-card img");
    let navTopo = document.querySelector(".navbar-topo");
    let footer = document.querySelector("footer");

    body.style.filter = "invert(1)";
    body.style.backgroundColor = "#000";

    if (corpoArtigoImg) corpoArtigoImg.style.filter = "invert(1)";
    
    novidadesImgs.forEach(img => img.style.filter = "invert(1)");

    navTopo.style.filter = "invert(1)";
    navTopo.style.backgroundColor = "#202020";
    footer.style.filter = "invert(1)";
    footer.style.backgroundColor = "#202020";

    localStorage.setItem("tema", "escuro");
}

function modoClaro() {
    let modoEscuroDiv = document.querySelector(".modoEscuro-container");
    let modoClaroDiv = document.querySelector(".modoClaro-container");

    modoEscuroDiv.classList.remove("naoMostrando"); 
    modoEscuroDiv.classList.add("mostrando");
    modoClaroDiv.classList.remove("mostrando");
    modoClaroDiv.classList.add("naoMostrando");

    let body = document.body;
    let corpoArtigoImg = document.querySelector(".corpo-artigo img");
    let novidadesImgs = document.querySelectorAll(".novidades-card img");
    let navTopo = document.querySelector(".navbar-topo");
    let footer = document.querySelector("footer");

    body.style.filter = "invert(0)";
    body.style.backgroundColor = "#fff";

    if (corpoArtigoImg) corpoArtigoImg.style.filter = "invert(0)";
    
    novidadesImgs.forEach(img => img.style.filter = "invert(0)");

    navTopo.style.filter = "invert(0)";
    navTopo.style.backgroundColor = "#000";
    footer.style.filter = "invert(0)";
    footer.style.backgroundColor = "#000";

    localStorage.setItem("tema", "claro");
}

window.onload = function () {
    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        modoEscuro();
    } else {
        modoClaro();
    }
};
