// 197.998.697
// 10, 9, 8, ..., 3, 2 (x)
// Soma
// 11 - (soma % 11) = Primeiro digito (if < 9 { 0 }
// 197.998.697-5
// 11, 10, ..., 3, 2 (x)
// 11 - (soma % 11) = Segundo digito
//

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })

    Object.defineProperty(this, 'arrayCPF', {
        enumerable: true,
        get: function() {
            return Array.from(this.cpfLimpo)
        }
    })

    Object.defineProperty(this, 'ultimosDigitos', {
        enumerable: true,
        get: function() {
            return this.arrayCPF.slice(9, 12)
        }
    })
}

ValidaCPF.prototype.multiplica = function (numero) {
    let contador = numero + 1
    return this.arrayCPF
        .slice(0, numero - 1)
        .map((digito) => {
            contador--
            return Number(digito) * contador;
        })
}

ValidaCPF.prototype.soma = function(array) {
    return array.reduce((a, b) => a + b)
}

ValidaCPF.prototype.converteDigito = function(soma) {
    return 11 - (soma % 11) <= 9 ? 11 - (soma % 11) : 0
}

ValidaCPF.prototype.validaDigito = function(numeroDigitoFinal) {
    digito = this.converteDigito(this.soma(this.multiplica(10 + numeroDigitoFinal)))
    return digito === Number(this.ultimosDigitos[numeroDigitoFinal])
}

ValidaCPF.prototype.validaCPF = function() {
    if (!this.validaDigito(0)) return false;
    if (!this.validaDigito(1)) return false;
    return true;
}

let cpf = '197.998.697-57'
let validaCPF = new ValidaCPF(cpf);
console.log(validaCPF.validaCPF() ? "CPF VÁLIDO" : "CPF INVÁLIDO")