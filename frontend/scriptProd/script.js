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

const imgProdDet1 = document.querySelector(".imgMac");

imgProdDet1.addEventListener("mouseenter", () => {
    imgProdDet1.classList.add("destaque");
});
imgProdDet1.addEventListener("mouseleave", () => {
    imgProdDet1.classList.remove("destaque");
});

const imgProdDet2 = document.querySelector(".imgMac2");

imgProdDet2.addEventListener("mouseenter", () => {
    imgProdDet2.classList.add("destaque");
});
imgProdDet2.addEventListener("mouseleave", () => {
    imgProdDet2.classList.remove("destaque");
});

const imgProdDet3 = document.querySelector(".imgBomb");

imgProdDet3.addEventListener("mouseenter", () => {
    imgProdDet3.classList.add("destaque");
});
imgProdDet3.addEventListener("mouseleave", () => {
    imgProdDet3.classList.remove("destaque");
});

function abrirTelaCheia(idVideo) {
    var video = document.getElementById(idVideo);
    video.style.display = "block";

    if (video.requestFullscreen) {
        video.requestFullscreen();
    }

    video.play();

    video.onfullscreenchange = function () {
        if (!document.fullscreenElement) {
            video.style.display = "none";
            video.pause();
        }
    }
}

const naoAperte = document.querySelector(".naoAperte");
let estagio = 0;

naoAperte.addEventListener("click", () => {
    estagio++;

    if (estagio === 1) {
        naoAperte.classList.add("naoAperte2");
        naoAperte.textContent = "Eu falei, NÃO APERTAR!!!";
    } else if (estagio === 2) {
        naoAperte.classList.remove("naoAperte2");
        naoAperte.classList.add("naoAperte3");
        naoAperte.textContent = "VOCÊ SABE LER? EU DISSE NÃO!!!";
    } else if (estagio === 3) {
        naoAperte.classList.remove("naoAperte3");
        naoAperte.classList.add("naoAperte4");
        naoAperte.textContent = "NÃO ME DESAFIE!!!!!";
    } else if (estagio === 4) {
        naoAperte.classList.remove("naoAperte4");
        naoAperte.classList.add("naoAperte5");
        naoAperte.textContent = "Eu te desafio a fezer isso mais uma vez...";
    } else if (estagio === 5) {
        const video = document.getElementById("videoTroll");
        const numeroSorteado = Math.floor(Math.random() * 6) + 1;

        video.src = `assets/videoAleatorio${numeroSorteado}.mp4`;

        video.classList.add("tela-cheia-forcada");
        video.classList.add("sem-cursor");

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }

        video.volume = 1;
        video.play();

        video.addEventListener("ended", () => {
            video.classList.remove("tela-cheia-forcada");
            video.classList.remove("sem-cursor");

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

            naoAperte.style.display = "none";
        });
    }
});

