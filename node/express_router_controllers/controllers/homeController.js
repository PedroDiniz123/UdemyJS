exports.index = function(req, res) {
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome" />
    <button type="submit">Enviar</button>
    </form>
    `);
}

exports.post = function(req, res) {
    res.send(`Rota de post ${req.body.nome}`)
}