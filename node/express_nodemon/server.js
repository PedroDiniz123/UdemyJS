const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome" />
    <button type="submit">Enviar</button>
    </form>
    `);
})

app.post('/', (req, res) => {
    res.send(`Recebi o formulario`)
})

app.listen(3000)

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!')
})
