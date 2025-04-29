//Funções data e hora
let agora = new Date();

console.log(agora);

console.log(agora.toDateString);

console.log(agora.toLocaleDateString);

// get 
console.log(agora.getFullYear); //mostrar o ano

//set
agora.getFullYear(2030);
console.log(agora.toLocalDateString()); //24/02//2025


//operacoes de data e hora

let data1 = new Date("2025-02-04")
let data2 = new Date("2025-12-17")

let diferenca = data1-data2;

console.log(diferenca/(1000*60*60*24)); //calcular em dias 