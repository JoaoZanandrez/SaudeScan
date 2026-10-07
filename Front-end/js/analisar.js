const escolherImagem = document.querySelector(".escolher-imagem");
const tirarFoto = document.querySelector(".tirar-foto");
const inputImagem = document.querySelector("#imagem");

escolherImagem.addEventListener("click", function (evento){
    evento.preventDefault();
    inputImagem.click()
});

const preview = document.querySelector("#preview");

inputImagem.addEventListener("change", function () {
    const arquivo = inputImagem.files[0];

    if (arquivo) {
        preview.src = URL.createObjectURL(arquivo);
    }
});