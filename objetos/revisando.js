const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Paradela',
    idade: 21,
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const chave = 'nome'
// console.log(pessoa[chave])

const pessoa2 = new Object();
pessoa2.nome = "Luiz"
pessoa2.sobrenome = "Otávio"

pessoa.falar = function() {
    return `${this.nome} ${this.sobrenome}: Meu nome é ${this.nome} ${this.sobrenome}`
}

console.log(pessoa.falar())
console.log(pessoa.nomeCompleto)


// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa3 = criaPessoa('Maria', 'Pia')

console.log(pessoa3.nomeCompleto)


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this = Publico
    // const = privado
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa4 = new Pessoa("Letícia", "Paradela");
console.log(pessoa4.nomeCompleto());

Object.freeze(pessoa4)
