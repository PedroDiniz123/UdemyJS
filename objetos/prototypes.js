// Construtora -> molde (classes)
// construção = instância

// __proto__ Métodos para todas as instâncias

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${nome} ${sobrenome}`
}

const pessoa = new Pessoa("Pedro", "Paradela")
Pessoa.prototype.estouAqui = "hahaha"

// Pessoa.prototype === pessoa.__proto__

console.log(pessoa.estouAqui)