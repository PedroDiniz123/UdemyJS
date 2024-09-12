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
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const sessionOptions = session ({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true
    }
})
app.use(sessionOptions);
app.use(flash());
const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

// const helmet = require('helmet')
// app.use(helmet());

const csrf = require('csurf');
const middlewares = require("./src/middlewares/middleware");

// Setando a pasta de views
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Conteúdo estático
app.use(express.static(path.join(__dirname, 'public')));


app.use(csrf());

// middleware global
app.use(middlewares.middlewareGlobal)
app.use(middlewares.checkCsrfError)
app.use(middlewares.csrfMiddleware)

// Para forms
app.use(express.urlencoded({extended: true}));


// Setando o arquivo de rotas
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor executando na porta 3000")
    })
})
