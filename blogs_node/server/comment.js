var articleComment = require('./../db/moudel/articleComment')
var user = require('./../db/moudel/user')
const C = async (obj) => {
    // 增加文章的方法
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await articleComment.create(obj);
    } catch{
        msg.code = 1; msg.msg = '失败'
    }
    return msg
}
const R = async (where = {}, page = 1, limit = 10) => {
    // 每一次查询都需要查询写文章的人
    let msg = { code: 0, msg: '成功' }
    try {
        var result = await articleComment.findAll({
            where: where,
            // 引入user模型根据
            include: [{
                model: user,
                as: 'currentuser',
                attributes: ['nickname']
            }, {
                model: user,
                as: 'replyuser',
                attributes: ['nickname']
            }
            ],
            order: [  //根据id排序
                ["id", "desc"]//根据id倒序
            ],
            limit: parseInt(limit),//返回个数
            offset: limit * (page - 1),//起始位置,跳过数量
        })
        var count = await articleComment.findAll({ where: where })
        msg.count = count.length;
        msg.data = result
    } catch{
        msg.code = 1;
        msg.msg = '失败'
    }
    console.log(msg)
    return msg
}
module.exports = { R, C }
