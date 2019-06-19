var router = require('express').Router();
var Controller = require('./../controller/uers')
router.get('/user/finduser', (req, res) => {
    Controller.findUser(req, res)
})
router.get('/user/stroe', (req, res) => {
    // console.log(req.session.userID)
    var falg = Controller.getSession(req)
    if (falg) {
        res.send({ code: 0, msg: '登录成功！！' })
    } else {
        // console.log(1)
        res.send({ code: 1, msg: '身份以过期请重新登录！！' })
    }
})
router.get('/user/out', (req, res) => {
    var result = { code: 0, msg: '' }
    req.session.destroy((e) => {
        if (e) {
            result.code = 1;
            result.msg = '信息销毁失败:  ' + e
        }
        res.send(result)
    })
})
module.exports = router