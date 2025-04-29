//script de manupulação DOM

//getElementById -> gera uma variável simples
let titulo = document.getElementById("titulo");
console.log(titulo); //mostra as informaões da ID
titulo.innerText = "Outro Titulo"; //modifica o conteúdo da id

//getEloementByTagname -> gera uma variável vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //buscando elementos com p
//modificar elemento
paragrafo[0].innerText = "Exemplo de paragrafo modificado por DOM";
//modificar style do elemento
paragrafo[1].style.color = "red";

//getElementByClassname -> gera uma variável do tipo vetor
let descricao = document.getElementsByClassName("descricao");
//modificar elementos do array
for (let i = 0; i < descricao.length; i++) {
    descricao[i].style.color = "blue";  
};

//querySelector -> variavel simples -> seleciona o primeiro
let p = document.querySelector("p");
//modificacao de font
p.style.fontStyle = "bold";

//querySelectorAll-> variavel vetor -> seleciona todos 
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(Element => {
    Element.style.fontWeight = "Bold";
})

//eventos do tipo listener
function MudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

//chamando direto no script o ouvinte
document.getElementById("btncolor").addEventListener(
    "click", outracor
);

function outracor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}