const HomeModel = require('../models/HomeModel');


// // CREATE
// HomeModel.create({
//     titulo: 'Um Título de Testes',
//     descricao: 'Uma descrição de testes.'
// })
//     .then(dados => {
//         console.log(dados);
//     })
//     .catch(err => console.log(err))

// READ
// HomeModel.find()
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


exports.index = function(req, res) {
    // req.session.user = { nome: 'Pedro', logged: true } // Fica por 7 dias
    // console.log(req.session.user)

    // req.flash('info', 'Olá Mundo')
    // req.flash('error', 'asdasdsd')
    // req.flash('success', 'Blah')

    console.log(req.flash('error'), req.flash('info'), req.flash('success'));

    res.render('index');
}

exports.post = function(req, res) {
    res.send(`Rota de post ${req.body.nome}`)
}