const imgCeo = document.querySelector(".ceoSex");

imgCeo.addEventListener("mouseenter", () => {
    imgCeo.classList.add("destaque");
});
imgCeo.addEventListener("mouseleave", () => {
    imgCeo.classList.remove("destaque");
});

const form = document.querySelector('form');
const listaComentarios = document.getElementById('lista-comentarios');

const comentariosIniciais = [
    {
        nome: "Gustavo Henrique Brusky",
        mensagem: "Gostei do primeiro filme, espero o terceiro!",
        data: "24/08/2026",
        horario: "21:08"
    },
    {
        nome: "Kid Bengala",
        mensagem: "Espero que no segundo filme tenha mais sexo!",
        data: "24/08/2026",
        horario: "11:09"
    },
    {
        nome: "Luiz Gustavo",
        mensagem: "Espero que o Bruesky apareça no próximo filme, gostaria muito de ver o McQueen queimando a rodinha dele!😈😈😈",
        data: "23/08/2026",
        horario: "00:00"
    }
]

function adicionarComentariosNaTela(nomeDaPessoa, textoDaMensagem, colocarNoTopo) {
    const novoComentario = document.createElement('div');
    const agoraData = new Date();
    const dia = agoraData.getDate();
    const mes = agoraData.getMonth();
    const ano = agoraData.getFullYear();
    const data = `${dia}/${mes + 1}/${ano}`
    const hora = agoraData.getHours();
    const minutos = agoraData.getMinutes();
    const segundos = agoraData.getSeconds();
    const milisegundo = agoraData.getMilliseconds();
    const horario = `${hora}h:${minutos}m:${segundos}s:${milisegundo}ms`

    novoComentario.className = 'comentario-box';
    novoComentario.innerHTML = `<strong>${nomeDaPessoa}</strong> comentou:<p>${textoDaMensagem}</p> <br> Data:<p class="dataLayout">${data}</p> <br> Horário:<p class="horaLayout">${horario}</p>`

    if (colocarNoTopo === true) {
        listaComentarios.prepend(novoComentario);
    } else {
        listaComentarios.appendChild(novoComentario);
    }
}

comentariosIniciais.forEach(function (comentario) {
    adicionarComentariosNaTela(comentario.nome, comentario.mensagem, false);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    adicionarComentariosNaTela(nome, mensagem, true);

    form.reset();
});