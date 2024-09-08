function esperaAi(msg, tempo) {
    if (typeof msg != 'string') reject("BAD VALUE")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}

// Promise.all, Promice.race, Promise.resolve, Promise.reject
const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'outro valor'
]

// Apenas os "esperaAi" passam na Promise.all (obviamente) por serem Promises
Promise.all(promises)
    .then(resposta => {
        console.log(resposta)
    })
    .catch(err => console.log(err));


// O primeiro que for manda (não precisa ser promise)
Promise.race(promises)
    .then(resposta => {
        console.log(resposta);
    })
    .catch(err => console.log(err));

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}
