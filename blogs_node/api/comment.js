var router = require('express').Router();
var Controller = require('./../controller/comment')
router.get('/comment/list', (req, res) => {
    Controller.commentList(req, res)
})
router.post('/comment/add', (req, res) => {
    Controller.addComment(req, res)
})
module.exports = router