let tempo = 5000,
    imagemDoMomento = 0,
    imagens = document.querySelectorAll("#slider img")
maximo = imagens.length;

function proximaImagem() {

    imagens[imagemDoMomento].classList.remove("selected")

    imagemDoMomento++

    if (imagemDoMomento >= maximo) {
        imagemDoMomento = 0
    }

    imagens[imagemDoMomento].classList.add("selected")
}

function start() {
    setInterval(() => {
        proximaImagem()

    }, tempo)
}

window.addEventListener("load", start)
