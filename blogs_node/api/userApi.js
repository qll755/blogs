var router = require('express').Router();
var Controller = require('./../controller/uers')
router.get('/user/finduser', (req, res) => {
    Controller.findUser(req, res)
})
module.exports = router