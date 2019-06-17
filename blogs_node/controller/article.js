var DbServe = require('./../server/articleServe')
addArticle = async (req, res) => {
    req.body.user_id = req.session.userID;
    var result = await DbServe.C(req.body)
    res.send(result)
}
articleList = async (req, res) => {
    var limit = req.query.limit
    var page = req.query.page
    delete req.query.limit;
    delete req.query.page;
    var result = await DbServe.R(req.query, page, limit);
    res.send(result)
}
articleUpadata = async (req, res) => {
    var where = { id: req.body.id }
    delete req.body.id;
    var result = await DbServe.U(req.body, where)
    res.send(result)
}
module.exports = { addArticle, articleList, articleUpadata }