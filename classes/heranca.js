class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + " já está ligado")
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + "já está desligado")
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor
    }
}

let dispositivo = new Dispositivo("Smartphone");
console.log(dispositivo)

const smartphone = new Smartphone('iPhone', 'Branco')
console.log(smartphone)