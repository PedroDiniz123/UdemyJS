module.exports = (req, res, next) => {
    // console.log('')
    // console.log('Passei no middleware global')
    // console.log('')

    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'

    next()
}