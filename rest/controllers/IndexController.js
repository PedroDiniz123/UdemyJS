class IndexController {
    index(req, res) {
        res.json({
                tudoCerto: true
        });
    }
}

module.exports = new IndexController();