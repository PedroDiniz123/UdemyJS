const HomeModel = require('../models/HomeModel');


exports.index = function(req, res) {
    res.render('index');
}

exports.post = function(req, res) {
    res.send(`Rota de post ${req.locals.csrfToken}`);
}