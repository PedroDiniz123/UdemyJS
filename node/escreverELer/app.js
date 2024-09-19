const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const le = require('./modules/ler')

const pessoas = [
    { nome: 'Pedro' },
    { nome: 'Maria' },
    { nome: 'Letícia' },
    { nome: 'Clara' },
    { nome: 'Antônia' }
]

const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);
async function leArquivo(caminho) {

    const dados = await le(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(dado => {
        console.log(dado.nome)
        console.log(dado)
    })
}

leArquivo(caminhoArquivo)
