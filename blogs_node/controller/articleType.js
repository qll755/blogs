var DbServe = require('./../server/articleTypeServe')
addArticleType = async (req, res) => {
    var result = await DbServe.C(req.body)
    res.send(result)
}
findAll = async (res) => {
    var result = await DbServe.R()
    res.send(result)
}
module.exports = { addArticleType ,findAll}