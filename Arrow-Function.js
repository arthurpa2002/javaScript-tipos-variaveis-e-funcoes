// a arrow function é uma forma reduzida de escrever uma função
// ela é uma função anônima, ou seja, não tem nome
// ela é uma função expressa, ou seja, é uma função que está dentro de uma variável

function apresentar(nome){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`; // arrow function
const soma = (num1, num2) => num1 + num2; // arrow function

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente números de 1 a 9";
    } else{
        return num1 + num2;
    }
}