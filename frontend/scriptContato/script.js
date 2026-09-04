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