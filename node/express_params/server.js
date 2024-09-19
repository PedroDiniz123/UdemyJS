const express = require('express');
const {process_params} = require("express/lib/router");
const app = express();


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
// /profile/12345
// /profile/12345?campanha=googleads&nome_campanha=seila
// formulario

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome" />
    <button type="submit">Enviar</button>
    </form>
    `);
})

app.post('/', (req, res) => {
    res.send(`Obrigado por entrar em contato conosco, ${req.body.nome}!`)
    console.log(req.body)
})

app.listen(3000)

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco')
})


app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUsuarios)
})
