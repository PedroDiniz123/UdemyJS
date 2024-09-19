const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    // encoding padrão utf8 não precisa botar
    // flag w, r, a
    fs.writeFile(caminho, dados, { flag: 'a', encoding: 'utf8' })
}

