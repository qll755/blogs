var user = require('./../db/moudel/user')


const C = async (obj) => {
    // 增加用户的方法
    let msg = [{ code: 0, msg: '成功' }]
    try {
        var result = await user.create(obj);
    } catch{
        msg[0].code = 1; msg[0].msg = '失败'
    }
    return msg
}

const U = async (obj, where) => {
    let msg = [{ code: 0, msg: '成功' }]
    try {
        var result = await user.update(obj, { where: where })
    } catch{
        msg[0].code = 1; msg[0].msg = '失败'
    }
    return msg
}
const R = async (where = {}, page = 1, limit = 10, ) => {
    let msg = [{ code: 0, msg: '成功' }]
    try {
        var result = await user.findAll({
            where,
            order: [  //根据id排序
                ["id", "desc"]//根据id倒序
            ],
            limit: limit,//返回个数
            offset: limit * (page - 1),//起始位置,跳过数量
        })
        msg[0].date = result
    } catch{
        msg[0].code = 1; msg[0].msg = '失败'
    }
    return msg
}
const D = async (where) => {
    let msg = [{ code: 0, msg: '成功' }]
    try {
        var result = await user.destroy({ where: where })
    } catch{
        msg[0].code = 1; msg[0].msg = '失败'
    }
    return msg
}
module.exports = {
    C, U, R, D
}