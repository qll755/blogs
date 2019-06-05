var DbServe = require('./../server/userServe')
findUser = async (req, res) => {
    if (Object.getOwnPropertyNames(req.query).length !== 2) {
        return res.send([{ code: 1, msg: '登陆失败！！' }])
    }
    var result = await DbServe.R(req.query)
    if (result[0].data.length > 0) {
        // 后台设置session
        req.session.userID = result[0].data[0].id;
        result = [{ code: 0, msg: '成功' }]
        console.log(req.session.userID)
    } else {
        result = [{ code: 1, msg: '登陆失败！！' }]
    }
    res.send(result)
}
module.exports = {
    findUser
}