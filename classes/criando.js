class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Já atribui ao prototype
    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa("Pedro", "Paradela");
console.log(p1.nome);
p1.comer()