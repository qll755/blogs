var article = require('./../db/moudel/article')
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
module.exports = { C }