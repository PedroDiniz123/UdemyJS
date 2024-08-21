// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    // Forçar com que a variável estoque não possa ser manipulada
    Object.defineProperty(this, 'estoque', {
        // Property descriptor
        enumerable: true, // Mostra a chave
        value:estoque, // Valor
        writable: false, // Alterável
        configurable: true // configurável
    })

    Object.defineProperties(this, {
        nome: {
            // Property descriptor
            enumerable: true, // Mostra a chave
            value:nome, // Valor
            writable: false, // Alterável
            configurable: true // configurável
        },
        preco: {
            // Property descriptor
            enumerable: true, // Mostra a chave
            value:preco, // Valor
            writable: false, // Alterável
            configurable: true // configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);

for (let chave in p1) {
    console.log(chave);
    
}
