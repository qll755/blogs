var router = require('express').Router();
var Controller = require('./../controller/articleType')
router.post('/articleType/add', (req, res) => {
    Controller.addArticleType(req, res)
})

router.get('/articleType/list', (req, res) => {
    Controller.findAll(res)
})
module.exports = router