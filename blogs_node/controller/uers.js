var DbServe = require('./../server/userServe')
findUser = async (req, res) => {
    if (Object.getOwnPropertyNames(req.query).length !== 2) {
        return res.send({ code: 1, msg: '登陆失败！！' })
    }
    // console.log(req.session[req.cookies['session_id']])//打印出为session里保存的用户id
    var result = await DbServe.R(req.query)
    if (result.data.length > 0) {
        // 后台设置session
        // console.log(result.data[0].id)
        req.session.userID = result.data[0].id;
        result = { code: 0, msg: '成功' }
    } else {
        result = { code: 1, msg: '登陆失败！！' }
    }
    res.send(result)
}
// 获取用户保存的session信息
getSession = (req) => {
    // 只有当用户登录之后才会存在userID
    var falg = true
    if (req.session.userID) {
        falg = true
    } else {
        falg = false
    }
    return falg
}
module.exports = {
    findUser, getSession
}
// if ('undefined' === (typeof req.cookies.cookiename)){
//     res.send('deleted cookie');
// }  