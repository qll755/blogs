var router = require('express').Router();
var Controller = require('./../controller/article')
router.post('/article/add', (req, res) => {
    Controller.addArticle(req, res)
})

router.get('/article/list', (req, res) => {
    Controller.articleList(req, res)
})
router.post('/article/updata', (req, res) => {
    Controller.articleUpadata(req, res)
})
router.get('/article/info', (req, res) => {
    Controller.articleInfo(req, res)
})
module.exports = router