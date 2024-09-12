const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Para forms
app.use(express.urlencoded({extended: true}));


// Conteúdo estático
app.use(express.static(path.join(__dirname, 'public')));

// Setando a pasta de views
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Setando o arquivo de rotas
app.use(routes)


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
})
