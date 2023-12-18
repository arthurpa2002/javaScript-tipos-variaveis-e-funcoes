//let é usado para variáveis que podem ser alteradas e não podem ser redeclaradas 


let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}



area = altura * comprimento;

console.log(area);
