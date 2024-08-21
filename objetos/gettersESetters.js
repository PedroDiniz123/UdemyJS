function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    // Forçar com que a variável estoque não possa ser manipulada
    Object.defineProperty(this, 'estoque', {
        // Property descriptor
        enumerable: true, // Mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log("bad value")
                return
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);

for (let chave in p1) {
    console.log(chave);
    
}


// factory
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    }
}