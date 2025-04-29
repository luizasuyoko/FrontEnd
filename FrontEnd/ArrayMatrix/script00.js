//declaração de um array "[]" (use conchetes)
let array = []; //array dinamico

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["sapato", "caixa", "meia"];
let arrayMisto = [1, "Jose", true];

//tamanho de um array (length)
console.log(arrayNumeros.length); //9

//acessar um elemento do array(index)
console.log(arrayTexto[1]); //pocisao -1

//adicionar elementos de um array
//no começo (unshift)
arrayTexto.unshift("Tênis")
console.log(arrayTexto);
//no fim (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor
arrayTexto[2] = "Sacola"
console.log(arrayTexto);

//remover elementos do array
//no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);
//no fim(pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um array (laco de repiticao)
//percorrer o array de numeros 
for(let i =0;i<arrayNumeros.length;i++){
    console.log("indice[" +i+"]="+[arrayNumeros[i]])
}

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

//metodos uteis

//indexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elementos inexistente)

//splice (remover elementos do posicao)
arrayMisto.splice(2,1)
console.log(arrayMisto);

//operações avançadas de arrays
//Map - novos valores
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x*+2);
console.log(valoresDobro);
//Filter - comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);

//desafio (filtro x<35) && (x*3) = [30, 60, 90]
let desafio2 = valores.filter(x=>x<35).map(x=>x*+3);

//reduce ([] -> let x)
let soma = valores.reduce((valorSoma, valorElemento) => valorSoma + valorElemento);
console.log(soma);

//sort
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);