const produto = {
    nome: "Caneca",
    preco: 1.8
}

// Copia o endereço
// const outraCoisa = produto;

const outraCoisa = {
    ...produto,
    // Posso add mais
}

const caneca = Object.assign({}, produto) // Copiando tudo de produto pro objeto vazio (p)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// entries
for(let [key, value] of Object.entries(produto)) {
    console.log(key, value);
    
}

