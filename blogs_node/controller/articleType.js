var DbServe = require('./../server/articleTypeServe')
addArticleType = async (req, res) => {
    var isno = await DbServe.R(req.body)
    console.log(isno)
    var result = { code: '0', msg: '成功' }
    if (isno.data.length != 0) {
        result = { code: '2', msg: '该数据已存在' }
    } else {
        result = await DbServe.C(req.body)
    }
    res.send(result)
}
findAll = async (res) => {
    var result = await DbServe.R()
    res.send(result)
}
deleteType = async (req, res) => {
    var result = { code: 0, msg: '成功' }
    var isno = await DbServe.R({ f_id: req.query.id })
    if (isno.data.length != 0) {
        result = { code: '2', msg: '该数据下还存在子分类不能直接删除' }
    } else {
        result = await DbServe.D(req.query);
    }
    res.send(result)
}
module.exports = { addArticleType, findAll, deleteType }