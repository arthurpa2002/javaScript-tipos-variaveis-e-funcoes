//tipos de conversões
//booleano



//conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) //false pois compara o valor e o tipo da variavel 
console.log(numero == numeroString) //true pois só compara o valor da variavel e não o tipo da variavel
console.log(numero + numeroString)
console.log(numero + Number(numeroString)) //conversão explicita
console.log(numero + +numeroString) //conversão explicita


//conversão explicita