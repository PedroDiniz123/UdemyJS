
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
};

// __proto__: Object.prototype;
const objB = {
    chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveB)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco * (1 - 1/percentual);
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco * (1 + 1/percentual);
}

const produto = new Produto("Camiseta", 50);
produto.desconto(10);
console.log(produto.preco);


const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
p3.preco = 20
p3.aumento(10)
console.log(p3)