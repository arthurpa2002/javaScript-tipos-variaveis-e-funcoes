//parametros de funções


function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(2,2))
console.log(soma(4,5))
console.log(soma(6,7))
console.log(soma(8,9))

function nomeIdade(nome, idade){
     return `meu nome é ${nome} e minha idade é ${idade}`
 }


 console.log(nomeIdade('Arthur', 21))



 function multiplica(numero1 = 1, numero2 = 1){
     return numero1 * numero2
 }

    console.log(multiplica(soma(4,5), soma(3,3)))

    // function comParametro(param) {
    //     console.log(param)
    // }
    // comParametro()

    //esse resultado é undefined pois não foi passado nenhum parametro para a função
    