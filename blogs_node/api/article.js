var router = require('express').Router();
var Controller = require('./../controller/article')
router.post('/article/add', (req, res)=>{
    Controller.addArticle(req, res)
})


module.exports = router