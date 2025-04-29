// galeia de imagens dinamicas usando o dom

let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("AddImagem");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

//vetor das imagens
let imagens = [];

//adicionar imagem no vetor
btnAdd.addEventListener("click", () => {
    let imageUrl = uploadInput.ariaValueMax.trim();
    if(imageUrl === "") return;
    imagens.push(imageUrl);
    atualizarGaleria();
    atualizarCarrossel();
    uploadInput.value = ""; //limpar o campo input
});

//atualizarGaleria
function atualizarGaleria() {
    galeria.innerHTML = "";
    imagens.forEach(
        (imagem, index) => {
            let div = document.createElement("div");
            div.classList.add("imagemContainer");
            let img = document.createElement("img");
            img.src = imagem;
            let btnRemove = document.createElement("button");
            btnRemove.innerText = "X";
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click", ()=>{
                imagens.splice(index, 1);
                atualizarGaleria(); //recursao (chamar um elemento dentro do proprio elemento)
                atualizarCarrossel(); 
            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            galeria.appendChild(div);
        }
    );
}

// atualizar carrossel
function atualizarCarrossel() {
    carrossel.innerHTML = ""; //limpa o carrossel
    imagens.forEach(imagem => {
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%" //garante que a imagem ocupe o espaco correto
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`;
    iniciarCarrossel(); //funcao para iniciar o carrossel
}

//inciar o carrossel
function iniciarCarrossel() {
    let index = 0;
    setInterval(()=>{
        index = (index+1) % imagens.length;
        carrossel.style.transition = `transform ${(1+imagens.length)/imagens.length}s ease-in-out`; //transicao entre as imagens
        carrossel.style.transform = `translateX(-${index*100/imagens.length}%)`; //move corretamente o carrossel
    },2000);
}