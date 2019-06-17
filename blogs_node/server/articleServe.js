var article = require('./../db/moudel/article')
var user = require('./../db/moudel/user')
const C = async (obj) => {
    // 增加文章的方法
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await article.create(obj);
    } catch{
        msg.code = 1; msg.msg = '失败'
    }
    return msg
}
const R = async (where = {}, page = 1, limit = 10) => {
    // 每一次查询都需要查询写文章的人
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await article.findAll({
            where: where,
            // 引入user模型根据
            include: [{
                model: user,
                as: 'user',
                attributes: ['nickname']
            }],
            order: [  //根据id排序
                ["id", "desc"]//根据id倒序
            ],
            attributes: ['id', 'articletittle', 'articletype', 'articlecon', 'status', 'createtime'],
            limit: parseInt(limit),//返回个数
            offset: limit * (page - 1),//起始位置,跳过数量
        })
        var count = await article.findAll({ where: where })
        msg.count = count.length;
        msg.data = result
    } catch{
        msg.code = 1;
        msg.msg = '失败'
    }
    return msg
}
const U = async (obj, where) => {
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await article.update(obj, { where: where })
    } catch{
        msg.code = 1; msg.msg = '失败'
    }
    return msg
}
module.exports = { C, R, U }