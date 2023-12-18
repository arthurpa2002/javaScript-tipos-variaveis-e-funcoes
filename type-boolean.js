const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero === segundoNumero);

// == (comparação implicita) só compara o valor da variavel e não o tipo da variavel por exemplo 5 == "5" é true pois só compara o valor da variavel e não o tipo  da variavel 
// === (comparação explicita) compara o valor e o tipo da variavel por exemplo 5 === "5" é false pois compara o valor e o tipo da variavel


const texto1 = "Alura";
const texto2 = "alura";

console.log(texto1 === texto2);

//boolean

const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy

//0 => false
//1 => true

console.log(0 == false);
console.log("" == false);

//null => vazio ou nada
//undefined => não foi definido

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);
 
let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);

//typeof => retorna o tipo da variavel
