//Manipulação de String (cadeia de caracteres)

let texto = "aula de javascript";

//contar quantos caracteres tem essa varavel
console.log(texto.length); //18

//Maiusculas e minusculas
console.log(texto.toUpperCase()); //maiuscula
console.log(texto.toLowerCase()); //minuscula

//partes da string
console.log(texto.substring(0,4)); //aula
console.log(texto.slice(-10)); //Javascript

//substituição de parte da string
let texto2 = texto.replace("java", "type"); //aula de typescript 
console.log(texto2);

//tesoura(trim)
let texto3 = "  Javascript  ";
console.log(texto3); //  Javascript  
console.log(texto3.trim()); //"Javascript"

//separação de string

let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//desafio
//contar a quantidade de caracteres sem espaço
let desafio = "bom dia com muita alegria";
let solucaodesafio = desafio.replaceAll(" ", "");
console.log(desafio);
console.log(solucaodesafio);
console.log(desafio.length);
console.log(solucaodesafio.length);