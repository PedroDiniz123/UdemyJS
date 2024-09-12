require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
    console.log('MongoDB Connected');

    // Evento quando qacaba de conectar (usado na app.listen)
    app.emit('pronto')
    })
    .catch((err) => {
        console.log(err);
    })

const routes = require('./routes');
const path = require('path');

const middleware = require('./src/middlewares/middleware');

// middleware global
app.use(middleware);

// Para forms
app.use(express.urlencoded({extended: true}));


// Conteúdo estático
app.use(express.static(path.join(__dirname, 'public')));

// Setando a pasta de views
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Setando o arquivo de rotas
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor executando na porta 3000")
    })
})
