// Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter((valor) => {
    return valor % 2 === 0;
})

const dobroNumerosPares = numerosPares.map(numero => {
    return numero * 2;
})

const somaDobroPares = dobroNumerosPares.reduce((acumulador, valor) => {
    return acumulador += valor;
})

console.log(somaDobroPares);