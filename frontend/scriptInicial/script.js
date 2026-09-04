const imgCeo = document.querySelector(".ceoSex");

imgCeo.addEventListener("mouseenter", () => {
    imgCeo.classList.add("destaque");
});
imgCeo.addEventListener("mouseleave", () => {
    imgCeo.classList.remove("destaque");
});

const trocaTema = document.querySelector("#tema-claro");
const root = document.documentElement;
const imagemTema = document.querySelector("#imagem-temaClaro");
const audioMeme = new Audio('assets/Halogen - U Got That - Accession (youtube).mp3'); 

trocaTema.addEventListener("mouseenter", () => {
    audioMeme.currentTime = 0;
    audioMeme.play();
});

trocaTema.addEventListener("mouseleave", () => {
    audioMeme.pause();
    audioMeme.currentTime = 0;
});

const temaSalvo = localStorage.getItem('meuTema');
if (temaSalvo === 'light') {
    root.setAttribute('data-theme', 'light');
    imagemTema.src = "assets/RicardoMilosLua (1).png"; 
}

trocaTema.addEventListener("click", () => {
    if (root.getAttribute('data-theme') === 'light') {
        root.removeAttribute('data-theme');
        localStorage.setItem('meuTema', 'dark');
        imagemTema.src = "assets/RicardoMilosSol2.jpg"; 
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('meuTema', 'light');
        imagemTema.src = "assets/RicardoMilosLua (1).png"; 
    }
});

const imgProd1 = document.querySelector(".mac");

imgProd1.addEventListener("mouseenter", () => {
    imgProd1.classList.add("destaque");
});
imgProd1.addEventListener("mouseleave", () => {
    imgProd1.classList.remove("destaque");
});

const imgProd2 = document.querySelector(".mac2");

imgProd2.addEventListener("mouseenter", () => {
    imgProd2.classList.add("destaque");
});
imgProd2.addEventListener("mouseleave", () => {
    imgProd2.classList.remove("destaque");
});

const imgProd3 = document.querySelector(".bomb");

imgProd3.addEventListener("mouseenter", () => {
    imgProd3.classList.add("destaque");
});
imgProd3.addEventListener("mouseleave", () => {
    imgProd3.classList.remove("destaque");
});