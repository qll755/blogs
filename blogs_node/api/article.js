var router = require('express').Router();
var Controller = require('./../controller/article')
router.post('/article/add', (req, res) => {
    Controller.addArticle(req, res)
})

router.get('/article/list', (req, res) => {
    console.log(2)
    Controller.articleList(req, res)
})
router.post('/article/updata', (req, res) => {
    Controller.articleUpadata(req, res)
})
module.exports = router