//const é um tipo de variável que não pode ser alterada, ou seja, é uma constante e não pode ser redeclarada

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area); 