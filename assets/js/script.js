const elementoImagem = document.querySelector("#imagem");
const elementoBotao = document.querySelector("#alterar");
const momento = document.querySelector("#estados");

elementoBotao.addEventListener("click", () => {
    if(elementoBotao.value == "primeiro"){
        elementoImagem.src = "../img/medrosa.jpg"
        elementoBotao.value = "segundo"
        momento.innerHTML = "medrosa"
    }else if(elementoBotao.value == "segundo"){
        elementoImagem.src = "../img/corajosa.jpg"
        elementoBotao.value = "terceiro"
        momento.innerHTML = "corajosa"
    }else{
       elementoImagem.src = "../img/meiga.jpg"
       momento.innerHTML = "Meiga"
    }
});