const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosReduzidos = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador += valor
    }
    return acumulador;
}, 0)

console.log(numerosReduzidos)