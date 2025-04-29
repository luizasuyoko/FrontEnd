//criar um rpgrama que receba varias notas e calcule a media
const prompt = require("prompt-sync")();

let vetorNotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
    console.log("1. digitar novar nota")
    console.log("2. calcular média")
    console.log("3. Sair");
    let operacao = prompt("Escolha a opção desejada: ")
    switch (operacao) {
        case "1":
            let nota = Number(prompt("Digite a nota do aluno" +contador, ": "));
            vetorNotas.push(nota);
            break;
        case "2":
            let media = vetorNotas.reduce((x,y) => x+y,0)/vetorNotas.length;
            console.log("A média da sala é " +media)
            break;
        case "3":

            break;
    }
}