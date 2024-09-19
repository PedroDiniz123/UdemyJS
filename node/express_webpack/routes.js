const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
router.get('/', homeController.index);
router.post('/', homeController.post)

// Rotas de contato
router.get('/contato', contatoController.index)

module.exports = router;
