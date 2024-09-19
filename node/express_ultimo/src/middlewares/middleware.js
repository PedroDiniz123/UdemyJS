exports.middlewareGlobal = (req, res, next) => {
    // console.log('')
    // console.log('')

    res.locals.umaVariavelLocal = 'OIEEE'

    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    console.log('Checou o erro')
    if (err && 'EBADCSRFTOKEN' === err.code) {
        console.log('Deu o erro')
        console.log(err)
        return res.render('404')
    }
    // next()
}

exports.csrfMiddleware = (req, res, next) => {
    console.log('Atribuiu o token')
    res.locals.csrfToken = req.csrfToken();
    console.log(res.locals.csrfToken)
    next()
}

