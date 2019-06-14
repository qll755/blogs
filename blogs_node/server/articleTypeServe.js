var articleType = require('./../db/moudel/articleType')
const C = async (obj) => {
    // 增加文章的方法
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await articleType.create(obj);
        msg.data = result
    } catch{
        msg.code = 1; msg.msg = '失败'
    }
    return msg
}
const R = async (where = {}) => {
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await articleType.findAll({ where: where })
        msg.data = result
    } catch{
        msg.code = 1;
        msg.msg = '失败'
    }
    return msg
}
const D = async (where) => {
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await articleType.destroy({ where: where })
    } catch{
        msg.code = 1; msg.msg = '失败'
    }
    return msg
}
module.exports = { C, R, D }