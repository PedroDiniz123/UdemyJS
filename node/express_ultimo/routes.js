const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

const middlewares = require('./src/middlewares/middleware');

// function middleware(req, res, next) {
//     req.session = { nome: 'Pedro', sobrenome: 'Paradela' }
//     console.log();
//     console.log('middleware');
//     console.log();
//     next()
// }



// Rotas da home
router.get('/', homeController.index);
router.post('/', homeController.post)

// Rotas de contato
router.get('/contato', contatoController.index)

module.exports = router;
