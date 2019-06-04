var DbServe = require('./../server/userServe')
findUser = async (req, res) => {
    var result = await DbServe.R(req.query)
    // if (result.date.length > 0) {
    //     // 查寻成功
    // } {
    //     // 查询失败
    // }
    res.send(result)
}
module.exports = {
    findUser
}